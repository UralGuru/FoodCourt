import React, {useEffect, useState} from "react";
import styles from "./createCafe.module.scss";
import {withAuth} from "@shared/HOC";
import cn from "classnames";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useAppDispatch} from "@shared/hooks";
import axios from "axios";
import {createCafeBek} from "@constants/types";
import {URLManager} from "@shared/url-manager";
import {createCafeThunk} from "@store/slices/cafeSlice";

function CreateCafe() {
    const [location, setLocation] = useState();

    const getLocation = async (address: string | undefined) => {
        const loc = address ? address : 'ujjvhvhgfchdgxyrxrdf'
        const res = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=799f4968-c3a1-4ecc-9411-0ec1f8bb804d&geocode=${loc}&format=json&results=1`)
        const r = res?.data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point.pos
        return r
    }

    const router = useRouter();
    const dispatch = useAppDispatch();

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<createCafeBek>();

    const handlerFormSubmit = handleSubmit((formValue) => {
        getLocation(formValue.address).then(e => {
            formValue = {...formValue, latitude: e?.split(' ')[1], longitude: e?.split(' ')[0]}
            console.log(formValue)
            router.push(URLManager.getApplicationURL())
            dispatch(createCafeThunk(formValue));
        })
        // setTimeout(() => {
        //     router.reload()
        // }, 1000);
    });

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerName}>Создание кафе</div>
            </div>


            <div className={styles.auth}>
                <form onSubmit={handlerFormSubmit}>
                    {/* NAME */}
                    <div className={styles.label}>
                        <label className={styles.labelText} htmlFor='name'>
                            Название
                        </label>
                        <div>
                            <input
                                id='name'
                                className={cn(styles.labelInput)}
                                {...register("name", { required: true })}
                                type='text'
                            />

                            {errors.name && (
                                <div>
                                    <span className={styles.errorMsg} role='alert'>
                                      Введите название заведения
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* DESCRIPTION */}
                    <div className={styles.label}>
                        <label className={styles.labelText} htmlFor='description'>
                            Описание
                        </label>
                        <div>
                            <textarea
                                id='description'
                                {...register('description', {})}
                                className={cn(styles.textAreaInput)}
                            />
                        </div>
                    </div>


                    {/* INN */}
                    <div className={styles.label}>
                        <label className={styles.labelText} htmlFor='certifyingDocument'>
                            ИНН
                        </label>
                        <div>
                            <input
                                id='certifyingDocument'
                                className={cn(styles.labelInput)}
                                {...register("certifyingDocument", { required: true })}
                                name='certifyingDocument'
                                type='text'
                            />
                            {errors.certifyingDocument && (
                                <div>
                                    <span className={styles.errorMsg} role='alert'>
                                      Введите ИНН
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* PERSONAL ACCOUNT */}
                    <div className={styles.label}>
                        <label className={styles.labelText} htmlFor='personalAccount'>
                            Лицевой счет
                        </label>
                        <div>
                            <input
                                id='personalAccount'
                                className={cn(styles.labelInput)}
                                {...register("personalAccount", { required: true })}
                                name='personalAccount'
                                type='text'
                            />
                            {errors.personalAccount && (
                                <div>
                                    <span className={styles.errorMsg} role='alert'>
                                      Введите лицевой счет
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* RATING */}
                    <div className={styles.label}>
                        <label className={styles.labelText} htmlFor='rating'>
                            Рейтинг
                        </label>
                        <div>
                            <input
                                id='rating'
                                className={cn(styles.labelInput)}
                                {...register("rating", { required: true })}
                                name='rating'
                                type='text'
                            />
                            {errors.rating && (
                                <div>
                                    <span className={styles.errorMsg} role='alert'>
                                      Введите лицевой счет
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* ADDRESS */}
                    <div className={styles.label}>
                        <label className={styles.labelText} htmlFor='address'>
                            Адрес
                        </label>
                        <div>
                            <input
                                id='address'
                                className={cn(styles.labelInput)}
                                {...register("address", { required: true })}
                                name='address'
                                type='text'
                            />
                            {errors.address && (
                                <div>
                                    <span className={styles.errorMsg} role='alert'>
                                      Введите адрес
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>


                    <div>
                        <button type='submit' className={styles.button}>
                            <div>Создать заявку</div>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </React.Fragment>
}

export default withAuth(CreateCafe)