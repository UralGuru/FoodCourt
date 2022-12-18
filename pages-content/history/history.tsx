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
                tfyghuijk
            </div>
        </div>
    </React.Fragment>
}