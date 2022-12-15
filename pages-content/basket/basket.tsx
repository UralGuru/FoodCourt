import React from "react";
import styles from "./basket.module.scss"
import {BasketCard} from "@components/cards/basketCard/basketCard";
import cn from "classnames";
import {useRouter} from "next/router";
import {URLManager} from "@shared/url-manager";

export function Basket() {
    const router = useRouter();

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.cafeName}>КОРЗИНА</div>
            </div>
            <BasketCard />
            <BasketCard />
        </div>


        <div className={cn(styles.button, styles.clearButton)}>Очистить корзину</div>
        <div className={cn(styles.button, styles.submitButton)} onClick={()=>router.push(URLManager.getOrderURL())}>Оформить заказ</div>

        <div className={styles.placeForButtons}/>
    </React.Fragment>
}