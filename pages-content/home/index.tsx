import React from 'react';
import {FC, useEffect} from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {AiFillStar, AiOutlineSearch} from "react-icons/ai";
import {clearMessage} from '@store/slices/authSlice';
import {UrlManager} from '@shared/urls';
import styles from './home.module.scss';


const cafes = {
    foundEntities: [
        {
            id: 1,
            name: "Хас кебаб",
            description: "Норм вкусно супер хадляль",
            status: "Rejected",
            avatar: "sadas",
            adress: "малышева 121",
            latitude: 0,
            longitude: 0
        },
        {
            id: 2,
            name: "Ян 2",
            description: "что-то",
            status: "Created",
            avatar: "",
            adress: "малышева 127",
            latitude: 0,
            longitude: 0
        },
        {
            id: 5,
            name: "что-то2",
            description: "что-то2",
            status: "Created",
            avatar: "",
            adress: "малышева 127",
            latitude: 0,
            longitude: 0
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
                <div className={styles.cafeList}>
                    <div className={styles.cafeItem}>
                        <div className={styles.cafeName}>Бургер Кинг</div>
                        <div className={styles.cafeDescription}>
                            <div>500 m</div>
                            <div className={styles.rating}>
                                    <AiFillStar className={styles.ratingStar}/>
                                5.0
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </React.Fragment>
    );
};
