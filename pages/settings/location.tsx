import React from "react";
import Head from "next/head";
import Location from "@pages-content/settings/location/location";

const LocatioPage = () => {
    return <React.Fragment>
        <Head>
            <title>GeoLocation</title>
        </Head>
        <Location />
    </React.Fragment>
}

export default Location;