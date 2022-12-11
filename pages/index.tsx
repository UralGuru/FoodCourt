import type { NextPage } from 'next';
import Head from "next/head";
import React from 'react';
import 'regenerator-runtime/runtime';
import { HomePageContent } from '@pages-content/home';



const HomePage: NextPage = () => {
  return <React.Fragment>
    <Head>
      <title>FoodCourt</title>
    </Head>
    <HomePageContent />
  </React.Fragment>;
};

export default HomePage;
