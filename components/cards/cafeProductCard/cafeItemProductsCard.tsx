import React, {useState} from 'react';
import styles from './cafeItemCard.module.scss';
import {Products} from "@constants/types";
import cn from "classnames";


export default function CafeItemCard(props: Products) {
    const [isAdd, setIsAdd] = useState(false);
    return (
        <div className={styles.productItem}>
            <div className={styles.productItemImageContainer} style={{backgroundImage: `url(${props.avatar})`}}>
            </div>
            <div className={styles.productItemDescription}>
                <div className={styles.productItemDescriptionTitle}>{props.name}</div>
                <div className={styles.productItemDescriptionContent}>{props.description}</div>
                <div className={styles.productFooter}>
                    <div className={styles.productItemPrice}>{props.price} ₽</div>
                    {isAdd && <div className={cn(styles.productItemPrice, styles.productItemAddTrue)} onClick={()=>setIsAdd(!isAdd)}>добавить</div>}
                    {!isAdd && <div className={cn(styles.productItemPrice, styles.productItemAddFalse)} onClick={()=>setIsAdd(!isAdd)}>удалить</div>}
                </div>
            </div>
        </div>
    );
}
