import React from 'react';
import {FC, useEffect} from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {AiFillStar, AiOutlineSearch} from "react-icons/ai";
import {clearMessage} from '@store/slices/authSlice';
import {UrlManager} from '@shared/urls';
import CafeCard from "@components/cards/cafeCard/cafeCard";
import styles from './home.module.scss';


const cafes = {
    foundEntities: [
        {
            id: 3,
            name: "кулинария",
            distance: "117 м",
            avatar: "https://avatars.mds.yandex.net/get-altay/4562252/2a0000017b79e05823ae8f3110fa98516684/XXL",
            adress: "комсомольская 72"
        },
        {
            id: 2,
            name: "вилка ложка",
            distance: "1,8 км",
            avatar: "https://spbu.ru/sites/default/files/losh0638.jpg",
            adress: "Ленина 127"
        },
        {
            id: 1,
            name: "KFC",
            distance: "3,07 км",
            avatar: "https://icdn.lenta.ru/images/2022/12/07/15/20221207150941564/square_1024_webp_87bd85a5e1e7217c424bbe647e5d1d42.webp",
            adress: "Ленина 127"
        }
    ],
    totalCount: 3
}


export const HomePageContent: FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth);

    // useEffect(() => {
    //   dispatch(clearMessage());
    //   if (!user.isLoggedIn) router.push(UrlManager.login);
    // }, [user.isLoggedIn]);

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
                    <AiOutlineSearch className={styles.searchIcon}/>
                    Поиск
                </div>

                {cafes.foundEntities.map(cafe => <CafeCard key={cafe.id} id={cafe.id} name={cafe.name} distance={cafe.distance} avatar={cafe.avatar} adress={cafe.adress} />)}

            </div>
        </React.Fragment>
    );
};
