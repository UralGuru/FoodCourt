import cn from "classnames";
import React from "react";
import {useRouter} from "next/router";
import {URLManager} from "@shared/url-manager";
import styles from "./navbar.module.scss";

export const Navbar = () => {
    const router = useRouter();

    const LinkHomePage = () => router.push(URLManager.getHomeURL());
    const LinkBasketPage = () => router.push(URLManager.getBasketURL());
    const LinkSettingsPage = () => router.push(URLManager.getSettingsURL());
    const LinkHistoryPage = () => router.push(URLManager.getHistoryURL());

    const activeHomePage = router.pathname === URLManager.getHomeURL() ? styles.navbarItemActive : '';
    const activeBasketPage = router.pathname === URLManager.getBasketURL() ? styles.navbarItemActive : '';
    const activeSettingsPage = router.pathname === URLManager.getSettingsURL() ? styles.navbarItemActive : '';
    const activeHistoryPage = router.pathname === URLManager.getHistoryURL() ? styles.navbarItemActive : '';

    if (router.pathname === URLManager.getLoginURL() || router.pathname === URLManager.getRegistrationURL()) return <></>

    return (
        <div className={styles.navbar}>
            <div className={cn(styles.navbarItem, activeHomePage)} onClick={LinkHomePage}>Home</div>
            <div className={cn(styles.navbarItem, activeBasketPage)} onClick={LinkBasketPage}>Basket</div>
            <div className={cn(styles.navbarItem, activeSettingsPage)} onClick={LinkSettingsPage}>Settings</div>
            <div className={cn(styles.navbarItem, activeHistoryPage)} onClick={LinkHistoryPage}>History</div>
        </div>
    )
}

