import React, {useEffect} from "react";
import styles from "./application.module.scss";
import {withAuth} from "@shared/HOC";
import cn from "classnames";
import ApplocationCard from "@components/cards/applicationCard/cafeCard";

function Application() {
    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerName}>Мои заявки</div>
            </div>
            <div>
                <button className={styles.button}>
                    <div>Создать заявку</div>
                </button>
            </div>
            <ApplocationCard status={'Created'}/>
            <ApplocationCard status={'Rejected'}/>
            <ApplocationCard />


        </div>
    </React.Fragment>
}

export default withAuth(Application)