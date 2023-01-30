import React from 'react';
import {LoginPageContent} from "@pages-content/auth/login";
import Head from "next/head";

export default function LoginPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Вход</title>
            </Head>
            <LoginPageContent/>
        </React.Fragment>
    );
}
