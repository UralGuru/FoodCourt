import React from "react";
import styles from "./basket.module.scss"

export function Basket() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.cafeName}>КОРЗИНА</div>
            </div>
            <div>
                <div>ВашРестроран</div>
                <div className={styles.cafeProductItem}>
                    <div className={styles.cafeProductImage}></div>
                    <div className={styles.cafeProductTextContent}>
                        <div className={styles.cafeProductTitle}>PizzaMargarita</div>
                        <div className={styles.cafeProductFooter}>
                            <div className={styles.cafeProductPrice}>181 R</div>
                            <div className={styles.cafeProductCounter}>
                                <div>-</div>
                                <div>1</div>
                                <div>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}