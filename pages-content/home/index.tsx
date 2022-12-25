import React from 'react';
import { FC, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { clearMessage } from '@store/slices/authSlice';
import CafeCard from '@components/cards/cafeCard/cafeCard';
import { getCafesThunk } from '@store/slices/cafeSlice';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import styles from './home.module.scss';
import {withAuth} from "@shared/HOC";
import {useRouter} from "next/router";
import {URLManager} from "@shared/url-manager";
import {getProfileThunk} from "@store/slices/profileSlice";

const HomePageContent: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cafes = useAppSelector((state) => state.cafe);
  const user = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  useEffect(() => {
    dispatch(getCafesThunk());
  }, []);

  useEffect(()=>{
    dispatch(getProfileThunk())
  })

  return (
    <React.Fragment>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <div className={styles.userName}>{user.name}</div>
            <div>Доброго времени суток</div>
          </div>
          <div className={styles.userIcon} onClick={()=>router.push(URLManager.getProfileURL())}>{user.name[0]}</div>
        </div>
        <div className={styles.searchContent}>
          <AiOutlineSearch className={styles.searchIcon} />
          <input className={styles.searchBlock}/>
        </div>
        {cafes.foundEntities.map((cafe) => (
          <CafeCard
            key={cafe.id}
            id={cafe.id}
            name={cafe.name}
            distance={cafe.distance}
            avatar={cafe.avatar}
            address={cafe.address}
            rating={cafe.rating}
          />
        ))}
      </div>

    </React.Fragment>
  );
};

export default withAuth(HomePageContent);





