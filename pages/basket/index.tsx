import React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import Basket from "@pages-content/basket/basket";

const BasketPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Basket</title>
            </Head>
            <Basket />
        </React.Fragment>
    );
};

export default BasketPage;