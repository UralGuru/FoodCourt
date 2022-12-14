import React from "react";
import styles from "./basket.module.scss"
import {BasketProductCard} from "@components/cards/basketProductCard/basketProductCard";
import {BasketCard} from "@components/cards/basketCard/basketCard";

export function Basket() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.cafeName}>КОРЗИНА</div>
            </div>
            <BasketCard />
            <BasketCard />
        </div>
    </React.Fragment>
}