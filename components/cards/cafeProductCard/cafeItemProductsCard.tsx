import React, {useState} from 'react';
import styles from './cafeItemCard.module.scss';
import {Products} from "@constants/types";
import cn from "classnames";
import {addProductToBasketThunk, getBasketThunk} from "@store/slices/basketSlice";
import {useAppDispatch} from "@shared/hooks";


export default function CafeItemCard(props: Products) {
    const [isAdd, setIsAdd] = useState(false);
    const dispatch = useAppDispatch()
    const getProductsFromBasket = () => {
        setIsAdd(!isAdd)
        dispatch(addProductToBasketThunk(props.id))
    }
    return (
        <div className={styles.productItem}>
            <div className={styles.productItemImageContainer} style={{backgroundImage: `url(${props.avatar})`}}>
            </div>
            <div className={styles.productItemDescription}>
                <div className={styles.productItemDescriptionTitle}>{props.name}</div>
                <div className={styles.productItemDescriptionContent}>{props.description}</div>
                <div className={styles.productFooter}>
                    <div className={styles.productItemPrice}>{props.price} ₽</div>
                    {!isAdd && <div className={cn(styles.productItemPrice, styles.productItemAddTrue)} onClick={getProductsFromBasket}>добавить</div>}
                    {isAdd && <div className={cn(styles.productItemPrice, styles.productItemAddFalse)} onClick={()=>setIsAdd(!isAdd)}>удалить</div>}
                </div>
            </div>
        </div>
    );
}
