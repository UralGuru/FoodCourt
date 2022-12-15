import styles from './order.module.scss';
import React from "react";
import cn from "classnames";
import Link from "next/link";
import {URLManager} from "@shared/url-manager";
import {AiOutlineArrowLeft, AiOutlineSearch} from "react-icons/ai";

export function Order() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <Link href={URLManager.getBasketURL()}>
                    <a>
                        <AiOutlineArrowLeft className={cn(styles.arrowBack, styles.redirectTo)}/>
                    </a>
                </Link>
                <div className={styles.headerTitle}>Оформление заказа</div>
                <div></div>
            </div>
            <div className={styles.result}>
                <div className={styles.title}>Товары</div>
                <div>
                    <div className={styles.product}>
                        <div>ANGUS</div>
                        <div>800 ₽</div>
                    </div>
                    <div className={styles.product}>
                        <div>Сухари</div>
                        <div>100 ₽</div>
                    </div>
                    <div className={styles.product}>
                        <div>Запеченая курица</div>
                        <div>800 ₽</div>
                    </div>
                    <div className={styles.resultPrice}>
                        <div>Итого</div>
                        <div>1700 ₽</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={cn(styles.button, styles.submitButton)}>Заказать</div>
        <div className={styles.placeForButtons}/>
    </React.Fragment>
}