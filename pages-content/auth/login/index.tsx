import React, {useState, useEffect, FC} from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { AiOutlineGoogle } from 'react-icons/ai';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { clearMessage, loginThunk } from '@store/slices/authSlice';
import { UserLoginRequest } from '@constants/types';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { URLManager } from '@shared/url-manager';
import styles from '../auth.module.scss';

export const LoginPageContent: FC = () => {
  // Vars
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.auth);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserLoginRequest>();

  const typeOfPassword = isShowPassword ? 'text' : 'password';
  const authMessage = user.isSuccess
    ? 'Успешная авторизация'
    : 'Неверный логин или пароль';

  // Handlers
  const handlerFormSubmit = handleSubmit((formValue) =>{
    dispatch(loginThunk(formValue));
});

  // Events
  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  useEffect(() => {
    if (user.isSuccess) router.push(URLManager.getHomeURL());
  }, [user.isSuccess]);

  return (
    <React.Fragment>
      <div className={styles.header}>Вход</div>
      <div className={styles.pageContent}>
        <div className={styles.auth}>
          <form onSubmit={handlerFormSubmit}>
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
                  type={typeOfPassword}
                />
                <span
                  className={styles.eyeContainer}
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  <span className={styles.eye}>
                    {isShowPassword && <BsEye style={{ fontSize: 20 }} />}
                    {!isShowPassword && <BsEyeSlash style={{ fontSize: 20 }} />}
                  </span>
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
            <form action="http://food-court.tk:8080/v1.0/auth/account/external-login?provider=Google&backUrl=/home" method="post">
              <button className={cn(styles.button, styles.buttonGoogle)}>
                <AiOutlineGoogle style={{ fontSize: 25, marginRight: 5 }} />
                <div>Google</div>
              </button>
            </form>
          </div>
          <div className={styles.regText}>
            Все еще нет аккаунта? Создайте его
            <Link href={URLManager.getRegistrationURL()}>
              <a className={styles.redirectTo}>здесь</a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
