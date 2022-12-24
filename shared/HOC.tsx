import {useRouter} from "next/router";
import React, {FC, useEffect, useState} from "react";
import {URLManager} from "@shared/url-manager";
import {useCookies} from "react-cookie";

export const withAuth = (Component: FC) => {
    const AuthenticatedComponent = () => {
        const [cookie, setCookie] = useCookies(['ApiTokens'])
        const router = useRouter();
        const [data, setData] = useState(false);
        console.log(cookie)


        useEffect(() => {
            const getUser = async () => {
                let accessToken = '';
                if (typeof window !== 'undefined') {
                    console.log(cookie)
                    cookie && localStorage.setItem('access-token', cookie.ApiTokens)
                    accessToken = localStorage.getItem('access-token') ?? "";



                }
                if (!accessToken) {
                    localStorage.setItem('access-token', cookie.ApiTokens)
                    router.push(URLManager.getLoginURL());
                } else {
                    setData(!!accessToken);
                }
            };
            getUser();
        }, []);

        return data ? <Component /> : <div style={{display: 'flex', justifyContent: 'center', marginTop: '40%'}}>Loading...</div>;
    };

    return AuthenticatedComponent;
};