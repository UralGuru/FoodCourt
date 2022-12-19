import styles from './historyCard.module.scss'

export default function HistoryCard() {
    return(
        <div className={styles.result}>
            <div className={styles.resultHeader}>
                <div>Заказ №339</div>
                <div className={styles.resultHeaderDate}>11.12.21 20:50</div>
            </div>
            <div className={styles.resultContent}>
                <div>Zakaz 1</div>
                <div>Zakaz 2</div>
                <div>Zakaz 3</div>
            </div>
            <div className={styles.resultFooter}>
                <div>Итого</div>
                <div>800 ₽</div>
            </div>
            <div className={styles.button}>Подробнее</div>
        </div>
    )
}