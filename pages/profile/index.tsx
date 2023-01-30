import React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import Basket from "@pages-content/basket/basket";
import Profile from "@pages-content/profile/profile";

const BasketPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Profile</title>
            </Head>
            <Profile />
        </React.Fragment>
    );
};

export default BasketPage;