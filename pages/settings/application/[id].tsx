import React from 'react';
import 'regenerator-runtime/runtime';
import {NextPage} from "next";
import Head from "next/head";
import MyCafe from "@pages-content/settings/application/myCafe/myCafe";

const MyCafeCardById: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>MyCafe</title>
            </Head>
            <MyCafe />
        </React.Fragment>
    );
};

export default MyCafeCardById;
