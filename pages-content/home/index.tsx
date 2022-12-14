import React, { useLayoutEffect } from 'react';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import { clearMessage } from '@store/slices/authSlice';
import CafeCard from '@components/cards/cafeCard/cafeCard';
import { getCafesThunk } from '@store/slices/cafeSlice';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import styles from './home.module.scss';
import { URLManager } from '@shared/url-manager';

export const HomePageContent: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);
  const cafes = useAppSelector((state) => state.cafe);

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  useEffect(() => {
    dispatch(getCafesThunk());
  }, []);

  useLayoutEffect(() => {
    if (!user.isLoggedIn) router.push(URLManager.getLoginURL());
  }, [user.isLoggedIn]);

  return (
    <React.Fragment>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <div className={styles.userName}>Урал</div>
            <div>Доброго времени суток</div>
          </div>
          <div className={styles.userIcon}>У</div>
        </div>
        <div className={styles.searchContent}>
          <AiOutlineSearch className={styles.searchIcon} />
          Поиск
        </div>
        {cafes.foundEntities.map((cafe) => (
          <CafeCard
            key={cafe.id}
            id={cafe.id}
            name={cafe.name}
            distance={cafe.distance}
            avatar={cafe.avatar}
            address={cafe.address}
          />
        ))}
      </div>

    </React.Fragment>
  );
};
