import React, {useEffect} from "react";
import styles from "./application.module.scss";
import {withAuth} from "@shared/HOC";
import ApplocationCard from "@components/cards/applicationCard/cafeCard";
import {URLManager} from "@shared/url-manager";
import {useRouter} from "next/router";

function Application() {
    const router = useRouter();

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerName}>Мои заявки</div>
            </div>
            <div>
                <button className={styles.button} onClick={()=>router.push(URLManager.getCreateCafeURL())}>
                    <div>Создать заявку</div>
                </button>
            </div>
            <ApplocationCard status={'Created'} id={1}/>
            <ApplocationCard status={'Rejected'} id={2}/>
            <ApplocationCard id={3}/>


        </div>
    </React.Fragment>
}

export default withAuth(Application)