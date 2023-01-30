import React from 'react';
import 'regenerator-runtime/runtime';
import {NextPage} from "next";
import Head from "next/head";
import {useRouter} from "next/router";

const CafeCard: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <React.Fragment>
            <Head>
                <title>FoodCourt</title>
            </Head>
            <p>Post: {pid}</p>
        </React.Fragment>
    );
};

export default CafeCard;