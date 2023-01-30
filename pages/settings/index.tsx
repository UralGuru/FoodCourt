import React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import Settings from "@pages-content/settings/settings";

const BasketPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Settings</title>
            </Head>
            <Settings />
        </React.Fragment>
    );
};

export default BasketPage;