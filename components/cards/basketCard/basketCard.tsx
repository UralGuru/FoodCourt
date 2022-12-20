import React from "react";
import styles from "./basketCard.module.scss";
import {BasketProductCard} from "@components/cards/basketProductCard/basketProductCard";
import {CafeBasket} from "@constants/types";

export function BasketCard(props: CafeBasket) {
    return (
        <div className={styles.cafeItem}>
            <div className={styles.cafeName}>{props.name}</div>
            {props.products.map(p => <BasketProductCard key={p.id}
                                                        id={p.id}
                                                        name={p.name}
                                                        productVariants={p.productVariants}
                                                        productTypes={p.productTypes}
                                                        status={p.status}
                                                        price={p.price}
                                                        avatar={p.avatar}
                                                        cafeId={p.cafeId}
                                                        description={p.description}
                                                        productId={p.productId}
                                                        carbohydrates={p.carbohydrates}
                                                        count={p.count}
                                                        fats={p.fats}
                                                        kcal={p.kcal}
                                                        proteins={p.proteins}
                                                        weight={p.weight}
            />)}

        </div>
    )
}