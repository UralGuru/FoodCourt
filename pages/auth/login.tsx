import React, {useState, useEffect} from 'react';
import cn from 'classnames'
import {AiOutlineGoogle} from 'react-icons/ai';
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import styles from './auth.module.scss';
import Link from 'next/link'
import {useForm} from "react-hook-form";
import {UrlManager} from "@shared/urls";


export default function LoginPage() {
    // const router = useRouter();
    // const dispatch = useDispatch();
    // const user = useSelector((state: any) => state.auth);
    // const [loading, setLoading] = useState(false);
    const [pswView, setPswView] = useState(false);
    //
    // useEffect(() => {
    //     // @ts-ignore
    //     dispatch(clearMessage());
    // }, []);
    //
    // const initialValues: loginType = {
    //     email: '',
    //     password: '',
    // };
    //
    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().email('Некорректный ввод').required('Введите логин'),
    //     password: Yup.string().required('Введите пароль'),
    // });
    //
    const handleLogin = (formValue: any) => {
        console.log(formValue)
        // setLoading(true);

        // @ts-ignore
        // dispatch(login(formValue))
        //     .unwrap()
        //     // .then(() => {
        //     //     navigate("/profile");
        //     // })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    };

    // if (user.isLoggedIn) {
    //     return router.push('/');
    // }

    const {register, formState: {errors}, handleSubmit} = useForm();
    const passwordShowEyeIcon = pswView ? <BsEye style={{fontSize: 20}}/> : <BsEyeSlash style={{fontSize: 20}}/>;
    const typePassword = pswView ? 'text' : 'password';

    return (
        <React.Fragment>
            <div className={styles.header}>Вход</div>
            <div className={styles.pageContent}>
                <div className={styles.auth}>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className={styles.label}>
                            <label className={styles.labelText} htmlFor="email">Логин</label>
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

                    {/*            {user.message && (*/}
                    {/*                <div className={styles.errorBlock}>*/}
                    {/*                    <div className={styles.errorMsg}>*/}
                    {/*                        {user.message ===*/}
                    {/*                        'User has been successfully authenticated'*/}
                    {/*                            ? 'Успешная авторизация ;)'*/}
                    {/*                            : ~user.message.indexOf('User with email') ||*/}
                    {/*                            ~user.message.indexOf('Invalid password')*/}
                    {/*                                ? 'Неверный логин или пароль'*/}
                    {/*                                : user.message}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            )}*/}


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

                    <div className={styles.regText}>
                        Все еще нет аккаунта? Создай его
                        {/*<Link href='/'>здесь</Link>*/}
                        <Link href={UrlManager.register}><a className={styles.a}>здесь</a></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
