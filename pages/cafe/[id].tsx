import React from 'react';
import 'regenerator-runtime/runtime';
import {NextPage} from "next";
import Head from "next/head";
import {useRouter} from "next/router";
import {CafeItemPageContent} from "@pages-content/cafes/cafeItem";

const CafeCardById: NextPage = () => {
    const router = useRouter()
    const id = router.query.id as string;

    return (
        <React.Fragment>
            <Head>
                <title>FoodCourt</title>
            </Head>
            <CafeItemPageContent id={+id}/>
        </React.Fragment>
    );
};

export default CafeCardById;
