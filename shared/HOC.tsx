import {useRouter} from "next/router";
import React, {FC, useEffect, useState} from "react";
import {URLManager} from "@shared/url-manager";
import {useCookies, Cookies} from "react-cookie";

export const withAuth = (Component: FC) => {
    const AuthenticatedComponent = () => {
        const [cookie, setCookie, removeCookie] = useCookies(['ApiTokens']);

        const router = useRouter();
        const [data, setData] = useState(false);
        console.log(cookie)


        useEffect(() => {
            const getUser = async () => {
                let accessToken = '';
                if (typeof window !== 'undefined') {
                    console.log(cookie)
                    !!cookie?.ApiTokens?.IsSuccess && localStorage.setItem('access-token', cookie.ApiTokens.acssessToken)
                    accessToken = localStorage.getItem('access-token') ?? "";
                    removeCookie('ApiTokens');


                }
                if (!accessToken) {
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