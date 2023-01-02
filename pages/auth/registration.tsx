import React from 'react';
import {RegisterPageContent} from "@pages-content/auth/registration";
import Head from "next/head";

export default function RegisterPage() {
  return (
    <React.Fragment>
        <Head>
            <title>Регистрация</title>
        </Head>
      <RegisterPageContent />
    </React.Fragment>
  );
}
