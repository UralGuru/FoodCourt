import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {useRouter} from "next/router";
import styles from './cafeCard.module.scss';
import {URLManager} from "@shared/url-manager";

interface CafeCard {
  id: number;
  name: string;
  distance: string;
  avatar: string;
  address: string;
}

export default function CafeCard(props: CafeCard) {
  const rating = (Math.floor(Math.random() * (50 - 30 + 1) + 30) / 10).toFixed(1);
  const router = useRouter()
  const id = router.query.id as string

  const pushCafeItemPage = () => router.push(URLManager.getCafeItemURL(props.id))


  return (
    <div className={styles.cafeList} onClick={pushCafeItemPage}>
      <div
        className={styles.cafeItem}
        style={{ backgroundImage: `url(${props.avatar})` }}
      >
        <div className={styles.cafeName}>{props.name}</div>
        <div className={styles.cafeDescription}>
          <div>{props.distance}</div>
          <div className={styles.rating}>
            <AiFillStar className={styles.ratingStar} />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
}
