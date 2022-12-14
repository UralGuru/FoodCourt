import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import styles from './cafeItem.module.scss';
import CafeItemProductsCard from "@components/cards/cafeProductCard/cafeItemProductsCard";
import {AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai';
import {useAppDispatch, useAppSelector} from "@shared/hooks";
import {clearCafeProductState, getCafeItemProductsThunk} from "@store/slices/cafeSlice";
import Link from "next/link";
import {URLManager} from '@shared/url-manager';
import cn from "classnames";
import {PropsId} from "@constants/types";
import {useRouter} from "next/router";

// export function CafeItemPageContent({id}: PropsId): JSX.Element {
export function CafeItemPageContent(): JSX.Element {
    const dispatch = useAppDispatch();
    const cafeItem = useAppSelector((state) => state.cafe)
    const cafeItemProducts = useAppSelector((state) => state.cafe.cafeItemProducts.foundEntities);
    const router = useRouter()
    const id = +(router.query.id as string);
    const eventCafe = cafeItem.foundEntities.filter(p => p.id === id)[0];

    useLayoutEffect(() => {
        dispatch(clearCafeProductState())
    }, [])

    useEffect(() => {
        dispatch(getCafeItemProductsThunk(id))
    }, []);

    return (
        <React.Fragment>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href={URLManager.getLoginURL()}>
                        <a>
                            <AiOutlineArrowLeft className={cn(styles.arrowBack, styles.redirectTo)}/>
                        </a>
                    </Link>
                    <div className={styles.cafeName}>{eventCafe?.name}</div>
                    <div><AiOutlineSearch style={{fontSize: '25'}}/></div>
                </div>

                {eventCafe && cafeItemProducts.map(product => <CafeItemProductsCard key={product.id}
                                                                        id={product.id}
                                                                        cafeId={product.cafeId}
                                                                        avatar={product.avatar}
                                                                        name={product.name}
                                                                        description={product.description}
                                                                        price={product.price}
                                                                        productTypes={product.productTypes}
                                                                        productVariants={product.productTypes}
                                                                        status={product.status}
                />)}

            </div>

        </React.Fragment>
    )
}
