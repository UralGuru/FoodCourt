import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {useRouter} from 'next/router';
import styles from './applicationCard.module.scss';
import {URLManager} from '@shared/url-manager';
import cn from "classnames";

interface ApplocationCard {
    status?: string;
    id: number
}

export default function ApplocationCard(props: ApplocationCard) {
    const router = useRouter();
    const status = props.status === 'Created' ? styles.buttonApprove :
        (props.status === 'Rejected' ? styles.buttonRefuse : '')
    const statusText = props.status === 'Created' ? 'одобрено' :
        (props.status === 'Rejected' ? 'отказано' : 'на рассмотрении')
    return (
        <div className={styles.wrapper}>
            <div className={styles.cafeNameDate}>
                <div className={styles.cafeName}>Большие тарелки</div>
                <div className={styles.cafeDate}>21.03.22 23:57</div>
            </div>
            <div className={cn(styles.buttonCafe, status)} onClick={()=>router.push(URLManager.getMyCreatedCafeURL(props.id))}>
                <div>{statusText}</div>
            </div>
        </div>
    );
}
