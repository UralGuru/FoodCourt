import {NextPage} from "next";
import Head from "next/head";
import React from "react";
import Application from "@pages-content/settings/application/application";

const RulesPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Application</title>
            </Head>
            <Application />
        </React.Fragment>
    );
};

export default RulesPage;