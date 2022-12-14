import React from 'react';
import 'regenerator-runtime/runtime';
import {NextPage} from "next";
import Head from "next/head";

const BasketPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Basket</title>
            </Head>
            <p>Basket</p>
        </React.Fragment>
    );
};

export default BasketPage;