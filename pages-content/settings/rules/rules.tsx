import React, {useEffect} from "react";
import styles from "./rules.module.scss";
import {withAuth} from "@shared/HOC";

function Rules() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerName}>Правила пользования</div>
            </div>

            <div className={styles.wrapper}>
                <div>Поздравляем с наступающим Новым годом! Пусть этот год будет для вас стартом в новых начинаниях и
                    поставленных целях! Исполнения всех заветных желаний, свершения всех задач! Пусть этот год принесёт
                    тепло и уют в ваш дом и согревает им всех родных и близких вам людей!
                </div>
                <div>
                    <img style={{width: '100%'}} src={'https://detskiy-sad.com/wp-content/uploads/2021/12/plakaty-ng-elka3.png'} />
                </div>
            </div>

        </div>
    </React.Fragment>
}

export default withAuth(Rules)