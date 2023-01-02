import styles from "./orderProductCard.module.scss";
import React from "react";
import {BasketProductResponse} from "@constants/types";

export function OrderProductCard(props:BasketProductResponse){
    const countProduct = (props.count - 1) ? ('x' + props.count) : '';

    return(
        <div className={styles.result}>

            <div>
                <div className={styles.cafeProductItem}>
                    <div
                        className={styles.cafeProductImage}
                        style={{ backgroundImage: `url(${props.avatar})` }}
                    ></div>
                    <div className={styles.cafeProductTextContent}>
                        <div>
                            <div className={styles.cafeProductTitle}>{props.name}</div>
                            <div className={styles.productItemDescriptionContent}>
                                {props.description}
                            </div>
                        </div>

                        <div className={styles.cafeProductFooter}>
                            <div className={styles.cafeProductPrice}>{props.price} ₽ {countProduct}</div>
                            <div />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}