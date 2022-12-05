import React, { useState, useEffect } from 'react';
import cn from 'classnames'
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import styles from './auth.module.scss';
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    // const router = useRouter();
    // const dispatch = useDispatch();
    // const user = useSelector((state: any) => state.auth);
    //
    // const [loading, setLoading] = useState(false);
    const [pswView, setPswView] = useState(false);

    // useEffect(() => {
    //     // @ts-ignore
    //     dispatch(clearMessage());
    // }, [dispatch]);

    const initialValues: any = {
        name: "",
        email: "",
        phone: "",
        password: "",
    };

    const handleLogin = (formValue: any) => {
        console.log(formValue)
    };
    // if (isLoggedIn) {
    //     return <Navigate to="/profile" />;
    // }

    // if (user.isLoggedIn) {
    //     return router.push('/')
    // }

    const {register, formState: {errors}, handleSubmit, control} = useForm();
    const passwordShowEyeIcon = pswView ? <BsEye style={{fontSize: 20}}/> : <BsEyeSlash style={{fontSize: 20}}/>;
    const typePassword = pswView ? 'text' : 'password';

    return (
        <React.Fragment>
            <div className={styles.header}>РЕГИСТРАЦИЯ</div>
            <div className={styles.pageContent}>
                <div className={styles.auth}>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className={styles.label}>
                            <label className={styles.labelText} htmlFor="name">Имя</label>
                            <div>
                                <input
                                    id="name" className={cn(styles.labelInput)}
                                    {...register("name", {
                                        required: "name",
                                    })}
                                    type='text'
                                />
                                {errors.name &&
                                    <div><span className={styles.errorMsg} role="alert">Введите имя</span>
                                    </div>}
                            </div>
                        </div>

                        <div className={styles.label}>
                            <label className={styles.labelText} htmlFor="phone">Телефон</label>
                            <div>
                                <input
                                    id="phone" className={cn(styles.labelInput)}
                                    {...register("phone", {
                                        required: "phone",
                                    })}
                                    type='text'
                                />
                                {errors.name &&
                                    <div><span className={styles.errorMsg} role="alert">Введите имя</span>
                                    </div>}
                            </div>
                        </div>

                        <div className={styles.label}>
                            <label className={styles.labelText} htmlFor="email">Почта</label>
                            <div>
                                <input id="email" className={cn(styles.labelInput)}
                                       {...register("email", {
                                           required: "required",
                                           pattern: {
                                               value: /\S+@\S+\.\S+/,
                                               message: ''
                                           }
                                       })} type="email"/>
                                {errors.email &&
                                    <div><span className={styles.errorMsg} role="alert">Введите логин</span></div>}
                            </div>
                        </div>

                        <div className={styles.label}>
                            <label className={styles.labelText} htmlFor="password">Пароль</label>
                            <div>
                                <input
                                    id="password" className={cn(styles.labelInput)}
                                    {...register("password", {
                                        required: "required",
                                        minLength: {
                                            value: 5,
                                            message: ""
                                        }
                                    })}
                                    type={typePassword}
                                />
                                <span className={styles.eyeContainer} onClick={() => setPswView(!pswView)}>
                                    <span className={styles.eye}>
                                        {passwordShowEyeIcon}
                                    </span>
                                </span>
                                {errors.password &&
                                    <div><span className={styles.errorMsg} role="alert">Пароль должен содержать не менее 5 символов</span>
                                    </div>}
                            </div>
                        </div>

                        {/* SUBMIT */}
                        <div>
                            <button
                                type='submit'
                                className={styles.button}
                            >
                                <div>Войти</div>
                            </button>
                        </div>
                    </form>

                    {/*{user.message && (*/}
                    {/*    <div className={s.errorBlock}>*/}
                    {/*        <div className={s.errorMsg}>*/}
                    {/*            {user.message === 'User did not created'*/}
                    {/*                ? "Пользователь не создан"*/}
                    {/*                : user.isSuccess*/}
                    {/*                    ? "Успешная регистрация"*/}
                    {/*                    : user.message*/}
                    {/*            }*/}


                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}


                    {/*SUBMIT WIDTH GOOFLE*/}
                    <div className={styles.textGroupBetweenBtn}>
                        <div className={styles.textBetweenBtn}>Или войдите с помощью</div>
                    </div>
                    <div>
                        <button
                            className={cn(styles.button, styles.buttonGoogle)}
                            // disabled={loading}
                            // onClick={() => AuthService.loginWidthGoogle()}
                            onClick={() => console.log('Auth width Google')}
                        >
                            <AiOutlineGoogle style={{fontSize: 25, marginRight: 5}}/>
                            <div>Google</div>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
        ;
};
