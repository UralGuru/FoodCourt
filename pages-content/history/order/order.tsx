import styles from './order.module.scss';
import React, {useEffect} from "react";
import cn from "classnames";
import {OrderProductCard} from "@components/cards/orderProductCard/orderProductCard";
import {useAppSelector} from "@shared/hooks";

export function Order() {
    const order = useAppSelector((state) => state.order.orderItem)

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div/>
                <div className={styles.headerTitle}>Заказ № {order.id}</div>
                <div></div>
            </div>
            <div className={styles.title}>{order.cafeName}</div>

            {order.products.map(p => <OrderProductCard key={p.id}
                                                       id={p.id}
                                                       name={p.name}
                                                       description={p.description}
                                                       avatar={p.avatar}
                                                       status={'Available'}
                                                       price={p.price}
                                                       proteins={p.proteins}
                                                       fats={p.fats}
                                                       carbohydrates={p.carbohydrates}
                                                       weight={p.weight}
                                                       kcal={p.kcal}
                                                       cafeId={p.cafeId}
                                                       productVariants={p.productVariants}
                                                       productTypes={p.productTypes}
                                                       productId={p.productId}
                                                       count={p.count}
            />)}


            <div className={styles.footer}>
                <div className={styles.resultPrice}>
                    <div>Статус</div>
                    <div>в процессе</div>
                </div>
                <div className={styles.resultPrice}>
                    <div>Итого</div>
                    <div>{order.totalPrice} ₽</div>
                </div>
            </div>

        </div>
        <div className={styles.placeForButtons}/>
    </React.Fragment>
}