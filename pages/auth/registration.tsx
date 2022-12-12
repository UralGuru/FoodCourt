import React, { useState, useEffect } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { clearMessage, registerThunk } from '@store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { UrlManager } from '@shared/urls';
import { Register } from '@constants/types';

import styles from './auth.module.scss';

export default function RegisterPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Register>();
  const onSubmit = handleSubmit((formValue) =>
    dispatch(registerThunk(formValue))
  );
  const typePassword = isShowPassword ? 'text' : 'password';
  const authMessage = user.isSuccess ? 'Успешная регистрация' : user.message;
  const passwordShowEyeIcon = isShowPassword ? (
    <BsEye style={{ fontSize: 20 }} />
  ) : (
    <BsEyeSlash style={{ fontSize: 20 }} />
  );

  useEffect(() => {
    dispatch(clearMessage());
    if (user.isLoggedIn) router.push(UrlManager.login);
  }, [user.isSuccess]);

  return (
    <React.Fragment>
      <div className={styles.header}>РЕГИСТРАЦИЯ</div>
      <div className={styles.pageContent}>
        <div className={styles.auth}>
          <form onSubmit={onSubmit}>
            {/* NAME */}
            <div className={styles.label}>
              <Link href={UrlManager.login}>
                <AiOutlineArrowLeft className={styles.arrowBack} />
              </Link>
              <label className={styles.labelText} htmlFor='name'>
                Имя
              </label>
              <div>
                <input
                  id='name'
                  className={cn(styles.labelInput)}
                  {...register('name', {
                    required: 'name',
                  })}
                  type='text'
                />
                {errors.name && (
                  <div>
                    <span className={styles.errorMsg} role='alert'>
                      Введите имя
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* PHONE */}
            <div className={styles.label}>
              <label className={styles.labelText} htmlFor='phone'>
                Телефон
              </label>
              <div>
                <input
                  id='phone'
                  className={styles.labelInput}
                  {...register('phone', {
                    required: 'phone',
                  })}
                  type='text'
                />
                {errors.phone && (
                  <div>
                    <span className={styles.errorMsg} role='alert'>
                      Введите телефон
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* E-MAIL */}
            <div className={styles.label}>
              <label className={styles.labelText} htmlFor='email'>
                Почта
              </label>
              <div>
                <input
                  id='email'
                  className={styles.labelInput}
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
                  className={styles.labelInput}
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
            <div className={styles.textBetweenBtn}>
              Или зарегистрируйтесь с помощью
            </div>
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
        </div>
      </div>
    </React.Fragment>
  );
}
