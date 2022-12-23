import styles from './historyCard.module.scss';
import React from "react";
import {URLManager} from "@shared/url-manager";
import {useRouter} from "next/router";

export default function HistoryCard() {
    const router = useRouter();

    return (
        <div className={styles.result}>
            <div className={styles.resultHeader}>
                <div>Заказ №340</div>
                <div className={styles.resultHeaderDate}>11.12.2021 20:50</div>
            </div>
            <div className={styles.resultContent}>
                <div>Ресторан "Большие тарелки"</div>
            </div>
            <div className={styles.resultFooter}>
                <div>Статус</div>
                <div>в процессе</div>
            </div>
            <div className={styles.button} onClick={() => router.push(URLManager.getOrderURL())}>Подробнее</div>
        </div>
    );
}
