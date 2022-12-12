import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styles from './cafeCard.module.scss';

interface CafeCard {
  id: number;
  name: string;
  distance: string;
  avatar: string;
  adress: string;
}

export default function CafeCard(props: CafeCard) {
  const rating = (Math.floor(Math.random() * (50 - 30 + 1) + 30) / 10).toFixed(
    1
  );

  return (
    <div className={styles.cafeList}>
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
