import styles from "./orderProductCard.module.scss";
import React from "react";

export function OrderProductCard(){
    const avatar = 'https://attuale.ru/wp-content/uploads/2018/11/2018Food___Cakes_and_Sweet_Sweet_pancakes_with_blueberries_and_strawberries_on_the_table_126359_.jpg'

    return(
        <div className={styles.result}>

            <div>
                <div className={styles.cafeProductItem}>
                    <div
                        className={styles.cafeProductImage}
                        style={{ backgroundImage: `url(${avatar})` }}
                    ></div>
                    <div className={styles.cafeProductTextContent}>
                        <div>
                            <div className={styles.cafeProductTitle}>Анигири</div>
                            <div className={styles.productItemDescriptionContent}>
                                Ахуенные вкусные и бла бла бла
                            </div>
                        </div>

                        <div className={styles.cafeProductFooter}>
                            <div className={styles.cafeProductPrice}>700 ₽</div>
                            <div />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}