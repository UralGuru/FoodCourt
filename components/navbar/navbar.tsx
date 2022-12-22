import cn from 'classnames';
import React from 'react';
import { useRouter } from 'next/router';
import { URLManager } from '@shared/url-manager';
import styles from './navbar.module.scss';
import { MdHistory, MdHome } from 'react-icons/md';
import { FaShoppingBasket } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

export const Navbar = () => {
  const router = useRouter();

  const LinkHomePage = () => router.push(URLManager.getHomeURL());
  const LinkBasketPage = () => router.push(URLManager.getBasketURL());
  const LinkSettingsPage = () => router.push(URLManager.getSettingsURL());
  const LinkHistoryPage = () => router.push(URLManager.getHistoryURL());

  const activeHomePage =
    router.pathname === URLManager.getHomeURL() ? styles.navbarItemActive : '';
  const activeBasketPage =
    router.pathname === URLManager.getBasketURL()
      ? styles.navbarItemActive
      : '';
  const activeSettingsPage =
    router.pathname === URLManager.getSettingsURL()
      ? styles.navbarItemActive
      : '';
  const activeHistoryPage =
    router.pathname === URLManager.getHistoryURL()
      ? styles.navbarItemActive
      : '';

  if (
    router.pathname === URLManager.getLoginURL() ||
    router.pathname === URLManager.getRegistrationURL()
  )
    return <></>;

  return (
    <div className={styles.navbar}>
      <div
        className={cn(styles.navbarItem, activeHomePage)}
        onClick={LinkHomePage}
      >
        <MdHome className={styles.icon} />
        <div>Главная</div>
      </div>
      <div
        className={cn(styles.navbarItem, activeBasketPage)}
        onClick={LinkBasketPage}
      >
        <FaShoppingBasket className={styles.icon} />
        <div>Корзина</div>
      </div>
      <div
        className={cn(styles.navbarItem, activeSettingsPage)}
        onClick={LinkSettingsPage}
      >
        <IoMdSettings className={styles.icon} />
        <div>Настройки</div>
      </div>
      <div
        className={cn(styles.navbarItem, activeHistoryPage)}
        onClick={LinkHistoryPage}
      >
        <MdHistory className={styles.icon} />
        <div>История</div>
      </div>
    </div>
  );
};
