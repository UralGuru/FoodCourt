// import {FC} from 'react';
// import React, {useState, useEffect} from "react";
// import {Formik, Field, Form, ErrorMessage} from "formik";
// import * as Yup from "yup";
// import {AiOutlineGoogle} from 'react-icons/ai';
// import {BsEye, BsEyeSlash} from 'react-icons/bs';
//
// // import { useDispatch, useSelector } from "react-redux";
// // import { login } from "../slices/authSlice";
// // import { clearMessage } from "../slices/messageSlice";
// import styles from "./auth.module.scss"
// import {registerType} from "../../constants/types";
// import {useRouter} from "next/router";
// import {useDispatch, useSelector} from "react-redux";
// import {clearMessage, register} from "../../store/slices/authSlice";
// import {log} from "util";
//
// export default function RegisterPage() {
//     const router = useRouter();
//     const dispatch = useDispatch();
//     const user = useSelector((state: any) => state.auth);
//
//     const [loading, setLoading] = useState(false);
//     const [pswView, setPswView] = useState(false);
//
//     useEffect(() => {
//         // @ts-ignore
//         dispatch(clearMessage());
//     }, [dispatch]);
//
//     const initialValues: registerType = {
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//     };
//
//     const validationSchema = Yup.object().shape({
//         name: Yup.string().required("Введите имя"),
//         phone: Yup.string().required("Введите телефон"),
//         email: Yup.string().email("Некорректный ввод").required("Введите логин"),
//         password: Yup.string().required("Придумайте пароль"),
//     });
//
//     const handleLogin = (formValue: registerType) => {
//         setLoading(true);
//         // @ts-ignore
//         dispatch(register(formValue))
//             .unwrap()
//             // .then(() => {
//             //     navigate("/profile");
//             // })
//             .catch(() => {
//                 setLoading(false);
//             });
//     };
//     // if (isLoggedIn) {
//     //     return <Navigate to="/profile" />;
//     // }
//
//     if (user.isLoggedIn) {
//         return router.push('/')
//     }
//
//
//     return (
//         <>
//             <div className={styles.header}>Регистрация</div>
//             <div className={styles.pageContent}>
//
//                 <div className={styles.auth}>
//                     <Formik
//                         initialValues={initialValues}
//                         validationSchema={validationSchema}
//                         onSubmit={handleLogin}
//                     >
//                         {({errors, touched}) => (
//                             <Form>
//
//                                 {/* NAME */}
//                                 <div className={styles.label}>
//                                     <label htmlFor="name" className={styles.labelText}>Имя</label>
//                                     <div>
//                                         <Field
//                                             id="name"
//                                             name="name"
//                                             type="text"
//                                             className={
//                                                 styles.labelInput +
//                                                 (errors.email && touched.email ? " is-invalid" : "")
//                                             }
//                                         />
//                                     </div>
//                                     <div className={styles.errorMsg}><ErrorMessage name="name" component="div"/></div>
//                                 </div>
//
//                                 {/* PHONE */}
//                                 <div className={styles.label}>
//                                     <label htmlFor="phone" className={styles.labelText}>Телефон</label>
//                                     <div>
//                                         <Field
//                                             id="phone"
//                                             name="phone"
//                                             type="text"
//                                             className={
//                                                 styles.labelInput +
//                                                 (errors.email && touched.email ? " is-invalid" : "")
//                                             }
//                                         />
//                                     </div>
//                                     <div className={styles.errorMsg}><ErrorMessage name="phone" component="div"/></div>
//                                 </div>
//
//                                 {/* LOGIN */}
//                                 <div className={styles.label}>
//                                     <label htmlFor="email" className={styles.labelText}>Логин</label>
//                                     <div>
//                                         <Field
//                                             id="email"
//                                             name="email"
//                                             type="text"
//                                             className={
//                                                 styles.labelInput +
//                                                 (errors.email && touched.email ? " is-invalid" : "")
//                                             }
//                                         />
//                                     </div>
//
//                                     <div className={styles.errorMsg}><ErrorMessage name="email" component="div"/></div>
//
//                                 </div>
//
//                                 {/* PASSWORD */}
//                                 <div className={styles.label}>
//                                     <label htmlFor="password" className={styles.labelText}>Пароль</label>
//                                     <div>
//                                         <Field
//                                             id="password"
//                                             name="password"
//                                             type={pswView ? "text" : "password"}
//                                             autoComplete="on"
//
//                                             className={
//                                                 styles.labelInput +
//                                                 (errors.password && touched.password ? " is-invalid" : "")
//                                             }
//                                         />
//                                         <span className={styles.eyeContainer} onClick={() => setPswView(!pswView)}>
//                                     <span className={styles.eye}>
//                                         {pswView
//                                             ? <BsEye style={{fontSize: 20}}/>
//                                             : <BsEyeSlash style={{fontSize: 20}}/>}
//                                     </span>
//
//                                 </span>
//
//                                     </div>
//
//                                     <div className={styles.errorMsg}><ErrorMessage name="password" component="div"/></div>
//                                 </div>
//
//
//                                 {user.message && (
//                                     <div className={styles.errorBlock}>
//                                         <div className={styles.errorMsg}>
//                                             {user.message === 'User did not created'
//                                                 ? "Пользователь не создан"
//                                                 : user.isSuccess
//                                                     ? "Успешная регистрация"
//                                                     : user.message
//                                             }
//
//
//                                         </div>
//                                     </div>
//                                 )}
//
//                                 {/* SUBMIT */}
//                                 <div>
//                                     <button
//                                         type="submit"
//                                         className={styles.button}
//                                         // disabled={loading}
//                                     >
//                                         {loading && (<span className="spinner-border spinner-border-sm"></span>)}
//                                         <div>Зарегистрироваться</div>
//                                     </button>
//                                 </div>
//
//
//                             </Form>
//                         )}
//                     </Formik>
//
//                     <div className={styles.textGroupBetweenBtn}>
//                         <div className={styles.textBetweenBtn}>Или зарегистрируйтесь с помощью</div>
//                     </div>
//
//
//                     {/* SUBMIT WIDTH GOOFLE*/}
//                     <div>
//                         <button
//                             className={`${styles.button} ${styles.buttonGoogle}`}
//                             // disabled={loading}
//                             onClick={() => console.log('Google')}
//                         >
//                             <AiOutlineGoogle style={{fontSize: 25, marginRight: 5}}/>
//                             <div>Google</div>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
//         ;
// };
