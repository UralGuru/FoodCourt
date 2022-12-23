import React, {useEffect} from "react"
import styles from "./history.module.scss"
import HistoryCard from "@components/cards/historyCard/historyCard";
import {withAuth} from "@shared/HOC";
import {useAppDispatch, useAppSelector} from "@shared/hooks";
import {getOrderThunk} from "@store/slices/orderSlice";

const History = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state) => state.order)

    useEffect(()=>{
        dispatch(getOrderThunk())
    }, [])

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>История заказов</div>
            </div>

            {orders.foundEntities.map(o => <HistoryCard key={o.id}
                                                        id={o.id}
                                                        cafeId={o.cafeId}
                                                        creationTime={o.creationTime}
                                                        status={o.status}
                                                        comment={o.comment}
                                                        totalPrice={o.totalPrice}
                                                        cafeName={o.cafeName}
            />)}



        </div>
    </React.Fragment>
};

export default withAuth(History)

