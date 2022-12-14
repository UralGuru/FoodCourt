import React from "react";
import styles from "./basketCard.module.scss";
import {BasketProductCard} from "@components/cards/basketProductCard/basketProductCard";

export function BasketCard() {
    return (
        <div className={styles.cafeItem}>
            <div className={styles.cafeName}>ВашРестроран</div>
            <BasketProductCard />
            <BasketProductCard />
            <BasketProductCard />
        </div>
    )
}