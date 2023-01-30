import React, { useEffect, useState } from 'react';
import styles from './basketProductCard.module.scss';
import { BasketProductResponse } from '@constants/types';
import { useAppDispatch } from '@shared/hooks';
import {
  changeCountProductInBasketThunk,
  deleteProductFromBasket,
  deleteProductFromBasketThunk,
} from '@store/slices/basketSlice';
import { AiFillDelete } from 'react-icons/ai';

export function BasketProductCard(props: BasketProductResponse) {
  const [count, setCount] = useState(props.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeCountProductInBasketThunk([props.id, count]));
  }, [count]);

  const deleteProduct = () => {
    dispatch(deleteProductFromBasketThunk(props.id))
    dispatch(deleteProductFromBasket(props.id));
  };

  return (
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
          <div className={styles.cafeProductPrice}>{props.price} ₽</div>
          <div className={styles.cafeProductCounter}>
            {!!(count - 1) && <div onClick={() => setCount(count - 1)}>-</div>}
            {!(count - 1) && (
              <div onClick={deleteProduct} className={styles.deleteIcon}>
                <AiFillDelete />
              </div>
            )}
            <div>{count}</div>
            <div onClick={() => setCount(count + 1)}>+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
