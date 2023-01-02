import {NextPage} from "next";
import Head from "next/head";
import React from "react";
import Rules from "@pages-content/settings/rules/rules";

const RulesPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Rules</title>
            </Head>
            <Rules />
        </React.Fragment>
    );
};

export default RulesPage;