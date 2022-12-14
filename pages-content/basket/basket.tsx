import React from "react";
import styles from "./basket.module.scss"
import {BasketCard} from "@components/cards/basketCard/basketCard";

export function Basket() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.cafeName}>КОРЗИНА</div>
            </div>
            <BasketCard />
            {/*<BasketCard />*/}
        </div>

        <div className={styles.submitButton}>
            <div className={styles.button}>
                <div>Оформить заказ</div>
            </div>
        </div>
        <div className={styles.placeForButtons}/>
    </React.Fragment>
}