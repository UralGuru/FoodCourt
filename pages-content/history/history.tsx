import React from "react"
import styles from "./history.module.scss"
import Link from "next/link";
import {URLManager} from "@shared/url-manager";
import {AiOutlineArrowLeft} from "react-icons/ai";
import cn from "classnames";

export function History() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>История заказов</div>
            </div>

            <div className={styles.result}>
                <div>
                    <div>Заказ №339</div>
                    <div>11 декабря 2021 в 20:50</div>
                </div>
                <div>
                    <div>Zakaz 1</div>
                    <div>Zakaz 2</div>
                    <div>Zakaz 3</div>
                </div>
                <div>
                    <div>Итого</div>
                    <div>800 ₽</div>
                </div>
                <div>Подробнее</div>
            </div>
        </div>
    </React.Fragment>
}
