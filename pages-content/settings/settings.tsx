import React, {useEffect} from "react";
import styles from "./settings.module.scss";
import {useAppDispatch, useAppSelector} from "@shared/hooks";
import {withAuth} from "@shared/HOC";
import {getProfileThunk} from "@store/slices/profileSlice";
import { useRouter } from 'next/router'
import {URLManager} from "@shared/url-manager";

function Settings() {
    const router = useRouter()

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerName}>Настройки</div>
            </div>

            <div className={styles.wrapper}>
                <div>Заявка на открытие своего кафе</div>
            </div>

            <div className={styles.wrapper} onClick={()=>router.push(URLManager.getRulesURL())}>
                <div>Правила пользования</div>
            </div>

            <div className={styles.wrapper} onClick={()=>router.push(URLManager.getLocationURL())}>
                <div>Узнать свою геопозицию</div>
            </div>

        </div>
    </React.Fragment>
}

export default withAuth(Settings)