import {useRouter} from "next/router";
import React, {FC, useEffect, useState} from "react";
import {URLManager} from "@shared/url-manager";
import {useCookies, Cookies} from "react-cookie";

export const withAuth = (Component: FC) => {
    const AuthenticatedComponent = () => {
        const [cookie] = useCookies(['ApiTokens']);

        const router = useRouter();
        const [data, setData] = useState(false);
        console.log(cookie)


        useEffect(() => {
            const getUser = async () => {
                let accessToken = '';
                if (typeof window !== 'undefined') {
                    if (cookie?.ApiTokens?.acssessToken)
                    {
                        console.log(cookie.ApiTokens.acssessToken);
                        localStorage.setItem('access-token', cookie.ApiTokens.acssessToken);
                        console.log(localStorage.getItem('access-token'));
                    }
                    console.log(cookie);
                    accessToken = localStorage.getItem('access-token') ?? "";
                }
                if (!accessToken) {
                    console.log("wtf")
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