import React, {useState} from "react";
import styles from "./basketProductCard.module.scss";
import {BasketProductResponse} from "@constants/types";

export function BasketProductCard(props: BasketProductResponse) {
    const [count, setCount] = useState(1);

    return(
        <div className={styles.cafeProductItem}>
            <div className={styles.cafeProductImage} style={{backgroundImage: `url(${props.avatar})`}}></div>
            <div className={styles.cafeProductTextContent}>
                <div>
                    <div className={styles.cafeProductTitle}>{props.name}</div>
                    <div className={styles.productItemDescriptionContent}>{props.description}</div>
                </div>

                <div className={styles.cafeProductFooter}>
                    <div className={styles.cafeProductPrice}>{props.price} ₽</div>
                    <div className={styles.cafeProductCounter}>
                        <div onClick={()=>setCount(count-1)}>-</div>
                        <div>{props.count}</div>
                        <div onClick={()=>setCount(count+1)}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}