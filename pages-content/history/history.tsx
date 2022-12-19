import React from "react"
import styles from "./history.module.scss"
import Link from "next/link";
import {URLManager} from "@shared/url-manager";
import {AiOutlineArrowLeft} from "react-icons/ai";
import cn from "classnames";
import HistoryCard from "@components/cards/historyCard/historyCard";

export function History() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>История заказов</div>
            </div>

            <HistoryCard />

            <div className={styles.result}>
                <div className={styles.resultHeader}>
                    <div>Заказ №340</div>
                    <div className={styles.resultHeaderDate}>11 декабря 2021 в 20:50</div>
                </div>
                <div className={styles.resultContent}>
                    <div>Zakaz 1</div>
                    <div>Zakaz 2</div>
                    <div>Zakaz 3</div>
                </div>
                <div className={styles.resultFooter}>
                    <div>Итого</div>
                    <div>800 ₽</div>
                </div>
                <div className={styles.button}>Подробнее</div>
            </div>

        </div>
    </React.Fragment>
}
