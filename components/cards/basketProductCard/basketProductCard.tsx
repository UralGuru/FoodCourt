import React, {useEffect, useState} from "react";
import styles from "./basketProductCard.module.scss";
import {BasketProductResponse, patchBasketThunk} from "@constants/types";
import {useAppDispatch} from "@shared/hooks";
import {changeCountProductInBasketThunk} from "@store/slices/basketSlice";
import {number} from "prop-types";

export function BasketProductCard(props: BasketProductResponse) {
    const [count, setCount] = useState(props.count);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(changeCountProductInBasketThunk([props.id, count]))
    }, [count])

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
                        <div>{count}</div>
                        <div onClick={()=>setCount(count+1)}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}