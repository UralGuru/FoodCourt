import React, {useEffect} from "react";
import styles from "./basket.module.scss"
import {BasketCard} from "@components/cards/basketCard/basketCard";
import cn from "classnames";
import {useRouter} from "next/router";
import {URLManager} from "@shared/url-manager";
import {useAppDispatch, useAppSelector} from "@shared/hooks";
import {cleanBasketThunk, getBasketThunk, clearBasketState} from "@store/slices/basketSlice";
import {withAuth} from "@shared/HOC";
import {createOrderThunk} from "@store/slices/orderSlice";

function Basket() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const basket = useAppSelector((state) => state.basket)

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [])

    const clearBasket = () => {
        dispatch(cleanBasketThunk());
        dispatch(clearBasketState());
    }

    const handleProducts = () => {
        router.push(URLManager.getHistoryURL())
        dispatch(createOrderThunk())
    }


    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.cafeName}>КОРЗИНА</div>
            </div>
            {basket?.cafesBaskets?.map(cafe =>
                <BasketCard key={cafe.id}
                            id={cafe.id}
                            name={cafe.name}
                            products={cafe.products}/>
            )}
        </div>

        {basket.totalProductsCount ? <div className={cn(styles.button, styles.clearButton)} onClick={clearBasket}>Очистить корзину</div>
            : <div className={styles.emptyBasketText}>Корзина пуста</div>}

        <div className={cn(styles.button, styles.submitButton)}
             onClick={handleProducts}>Оформить заказ
        </div>

        <div className={styles.placeForButtons}/>
    </React.Fragment>
}

export default withAuth(Basket)