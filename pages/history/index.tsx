import React from 'react';
import 'regenerator-runtime/runtime';
import {NextPage} from "next";
import Head from "next/head";
import History from "@pages-content/history/history";

const BasketPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>History</title>
            </Head>
            <History />
        </React.Fragment>
    );
};

export default BasketPage;