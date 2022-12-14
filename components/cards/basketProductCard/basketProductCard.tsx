import React, {useState} from "react";
import styles from "./basketProductCard.module.scss";

export function BasketProductCard() {
    const [count, setCount] = useState(1)
    return(
        <div className={styles.cafeProductItem}>
            <div className={styles.cafeProductImage}></div>
            <div className={styles.cafeProductTextContent}>
                <div className={styles.cafeProductTitle}>PizzaMargarita</div>
                <div className={styles.cafeProductFooter}>
                    <div className={styles.cafeProductPrice}>181 ₽</div>
                    <div className={styles.cafeProductCounter}>
                        <div onClick={()=>setCount(count-1)}>-</div>
                        <div>{count}</div>
                        <div onClick={()=>setCount(count+1)}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}