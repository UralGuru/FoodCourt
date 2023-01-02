import React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import {Order} from "@pages-content/history/order/order";

const BasketOrderPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Order</title>
            </Head>
            <Order />
        </React.Fragment>
    );
};

export default BasketOrderPage;