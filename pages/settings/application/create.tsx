import {NextPage} from "next";
import Head from "next/head";
import React from "react";
import CreateCafe from "@pages-content/settings/application/createCafe/createCafe";

const CreateCafePage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>CreateCafe</title>
            </Head>
            <CreateCafe />
        </React.Fragment>
    );
};

export default CreateCafePage;