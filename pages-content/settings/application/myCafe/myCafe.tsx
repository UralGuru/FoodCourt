import React from "react";
import styles from "./myCafe.module.scss";
import {withAuth} from "@shared/HOC";
import cn from "classnames";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {createCafeBek} from "@constants/types";
import {URLManager} from "@shared/url-manager";
import {createCafeThunk} from "@store/slices/cafeSlice";

function MyCafe() {
    const router = useRouter()
    const id = +(router.query.id as string);
    const valueTxt = (id===1) ? 'value' : 'placeholder';

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<createCafeBek>();

    const handlerFormSubmit = handleSubmit((formValue) => {
        console.log(formValue)
    });

    const statusText = id === 1 ? 'одобрено' : id === 2 ? 'отказано' : 'на рассмотрении';
    const status = id === 1 ? styles.buttonApprove : id === 2 ? styles.buttonRefuse : '';

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerName}>Мое кафе</div>
            </div>

            <div>
                <div className={cn(styles.buttonCafe, status)}>
                    <div>{statusText}</div>
                </div>
            </div>

            {(id===1) && <div className={styles.messageSuccess}>
                <div>Поздравляем, Вы директор заведения Аджарагуджу! </div>
                <div>Теперь вы можете добавлять кафе и редактировать данные.</div>
            </div>}

            {(id===2) && <div className={styles.messageError}>
                <div>Отказано по причине недостоверно переданных данных.</div>
                <div>Перепроверьте, пожалуйста, информацию и отправьте повторно.</div>
                <div>С уважением, команда поддержки!</div>
            </div>}

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
                            value={'Чайхана'}
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
                {/* DATE */}
                <div className={styles.label}>
                    <label className={styles.labelText} htmlFor='dateRes'>
                        Дата заявки
                    </label>
                    <div>
                        <input
                            id='dateRes'
                            className={cn(styles.labelInput)}
                            {...register("dateRes", { required: true })}
                            type='dateRes'
                            value={`12.12.22 23:56`}
                        />

                        {errors.dateRes && (
                            <div>
                                    <span className={styles.errorMsg} role='alert'>
                                      Введите название заведения
                                    </span>
                            </div>
                        )}
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
                            value={`3245769835793`}
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
                            value={`8765743587353745`}
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
                            value={`4.5`}
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
                            value={`Кулигина 45`}
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
                {/* DESCRIPTION */}
                <div className={styles.labelLast}>
                    <label className={styles.labelText} htmlFor='description'>
                        Описание
                    </label>
                    <div>
                            <textarea
                                id='description'
                                value={'Общая идея заведения. Место размещения ресторана. Основные группы гостей. Выбор кухни (меню).\n' +
                                    'Дизайн и общая обстановка заведения. Обслуживание гостей. Персонал (штат, критерии подбора и\n' +
                                    'отбора). Оборудование и мебель. Дополнительные услуги. Привлечение клиентов.'}
                                {...register('description', {})}
                                className={cn(styles.textAreaInput)}
                            />
                    </div>
                </div>

                {(id===1) && <div>
                    <button type='submit' className={styles.buttonCafe}>
                        <div>изменить данные</div>
                    </button>
                </div>}
            </form>

        </div>
        <div style={{height: '150px'}}></div>
    </React.Fragment>
}

export default withAuth(MyCafe)