import styles from './order.module.scss';
import React from "react";
import cn from "classnames";
import Link from "next/link";
import {URLManager} from "@shared/url-manager";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {OrderProductCard} from "@components/cards/orderProductCard/orderProductCard";

export function Order() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div/>
                <div className={styles.headerTitle}>Заказ № 381</div>
                <div></div>
            </div>
            <div className={styles.title}>Большие тарелки</div>

            <OrderProductCard/>

            <div className={styles.footer}>
                <div className={styles.resultPrice}>
                    <div>Статус</div><div>в процессе</div>
                </div>
                <div className={styles.resultPrice}>
                    <div>Итого</div><div>1700 ₽</div>
                </div>
            </div>

        </div>
        <div className={cn(styles.button, styles.submitButton)}>Заказать</div>
        <div className={styles.placeForButtons}/>
    </React.Fragment>
}