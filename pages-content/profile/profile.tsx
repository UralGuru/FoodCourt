import React, {useEffect} from "react";
import styles from "./profile.module.scss";
import {useAppDispatch, useAppSelector} from "@shared/hooks";
import {withAuth} from "@shared/HOC";
import {getProfileThunk} from "@store/slices/profileSlice";
import { useRouter } from 'next/router'
import {BiPencil} from "react-icons/bi";

function Profile() {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const profile = useAppSelector(state => state.profile)

    useEffect(()=>{
        dispatch(getProfileThunk())
    })

    const handleLogout = () => {
        localStorage.clear()
        router.reload()
    }

    return <React.Fragment>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.headerName}>Профиль</div>
            </div>
            <div className={styles.nameEmail}>
                <div className={styles.uName}>{profile.name}</div>
                <div className={styles.uEmail}>{profile.email}</div>
                <div className={styles.iconPenContent}><BiPencil className={styles.iconPen}/></div>
            </div>
            <div className={styles.wrapper} onClick={handleLogout}>
                <div>Выйти из аккаунта</div>
            </div>
        </div>
    </React.Fragment>
}

export default withAuth(Profile)