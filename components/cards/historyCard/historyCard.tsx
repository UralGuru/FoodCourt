import styles from './historyCard.module.scss';
import React from "react";
import {URLManager} from "@shared/url-manager";
import {useRouter} from "next/router";
import {OrderResponse} from "@constants/types";

export default function HistoryCard(props: OrderResponse) {
    const router = useRouter();

    const openItemOrder = () => {
        console.log(props.id)
        router.push(URLManager.getOrderURL())
    }

    const dateFormat = (date: string) => {
        const dateF:Date = new Date(date);
        return '' + dateF.getDate() + '.' +
            dateF.getMonth() + '.' +
            dateF.getFullYear() + ' ' +
            dateF.getHours() + ':' +
            dateF.getMinutes()
    }

    return (
        <div className={styles.result}>
            <div className={styles.resultHeader}>
                <div>Заказ {props.id}</div>
                <div className={styles.resultHeaderDate}>{dateFormat(props.creationTime)}</div>
            </div>
            <div className={styles.resultContent}>
                <div>{props.cafeName}</div>
            </div>
            <div className={styles.resultFooter}>
                <div>Статус</div>
                {/*<div>{props.status}</div>*/}
                <div>в работе</div>
            </div>
            <div className={styles.button} onClick={openItemOrder}>Подробнее</div>
        </div>
    );
}
