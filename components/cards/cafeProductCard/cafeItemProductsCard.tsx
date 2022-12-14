import React from 'react';
import {useRouter} from "next/router";
import {URLManager} from "@shared/url-manager";
import styles from './cafeItemCard.module.scss';
import {Products} from "@constants/types";


export default function CafeItemCard(props: Products) {

    return (
        <div className={styles.productItem}>
            <div className={styles.productItemImageContainer} style={{backgroundImage: `url(${props.avatar})`}}>
            </div>
            <div className={styles.productItemDescription}>
                <div className={styles.productItemDescriptionTitle}>{props.name}</div>
                <div className={styles.productItemDescriptionContent}>{props.description}</div>
                <div className={styles.productItemPrice}>{props.price} ₽</div>
            </div>
        </div>
    );
}
