import React, { useState, useEffect } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { AiOutlineGoogle } from 'react-icons/ai';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { clearMessage, loginThunk } from '@store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { UrlManager } from '@shared/urls';
import { Login } from '@constants/types';

import styles from './auth.module.scss';

export default function LoginPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Login>();
  const onSubmit = handleSubmit((formValue) => dispatch(loginThunk(formValue)));
  const typePassword = isShowPassword ? 'text' : 'password';
  const authMessage = user.isSuccess
    ? 'Успешная авторизация'
    : 'Неверный логин или пароль';
  const passwordShowEyeIcon = isShowPassword ? (
    <BsEye style={{ fontSize: 20 }} />
  ) : (
    <BsEyeSlash style={{ fontSize: 20 }} />
  );

  useEffect(() => {
    dispatch(clearMessage());
    user.accessToken && router.push(UrlManager.home);
  }, [user.accessToken]);

  return (
    <React.Fragment>
      <div className={styles.header}>Вход</div>
      <div className={styles.pageContent}>
        <div className={styles.auth}>
          <form onSubmit={onSubmit}>
            {/* LOGIN */}
            <div className={styles.label}>
              <label className={styles.labelText} htmlFor='email'>
                Логин
              </label>
              <div>
                <input
                  id='email'
                  className={cn(styles.labelInput)}
                  {...register('email', {
                    required: 'required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: '',
                    },
                  })}
                  type='email'
                />
                {errors.email && (
                  <div>
                    <span className={styles.errorMsg} role='alert'>
                      Введите логин
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* PASSWORD */}
            <div className={styles.label}>
              <label className={styles.labelText} htmlFor='password'>
                Пароль
              </label>
              <div>
                <input
                  id='password'
                  className={cn(styles.labelInput)}
                  {...register('password', {
                    required: 'required',
                    minLength: {
                      value: 5,
                      message: '',
                    },
                  })}
                  type={typePassword}
                />
                <span
                  className={styles.eyeContainer}
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  <span className={styles.eye}>{passwordShowEyeIcon}</span>
                </span>
                {errors.password && (
                  <div>
                    <span className={styles.errorMsg} role='alert'>
                      Пароль должен содержать не менее 5 символов
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* SUBMIT */}
            <div>
              <button type='submit' className={styles.button}>
                <div>Войти</div>
              </button>
            </div>
          </form>
          {user.message && (
            <div className={styles.errorBlock}>
              <div className={styles.errorMsg}>{authMessage}</div>
            </div>
          )}
          {/*SUBMIT WIDTH GOOFLE*/}
          <div className={styles.textGroupBetweenBtn}>
            <div className={styles.textBetweenBtn}>Или войдите с помощью</div>
          </div>
          <div>
            <button
              className={cn(styles.button, styles.buttonGoogle)}
              // onClick={() => AuthService.loginWidthGoogle()}
              onClick={() => console.log('Auth width Google')}
            >
              <AiOutlineGoogle style={{ fontSize: 25, marginRight: 5 }} />
              <div>Google</div>
            </button>
          </div>
          <div className={styles.regText}>
            Все еще нет аккаунта? Создай его
            <Link href={UrlManager.registration}>
              <a className={styles.redirectTo}>здесь</a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
