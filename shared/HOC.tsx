import {useRouter} from "next/router";
import React, {FC, useEffect, useState} from "react";

export const withAuth = (Component: FC) => {
    const AuthenticatedComponent = () => {
        const router = useRouter();
        const [data, setData] = useState(false);


        useEffect(() => {
            const getUser = async () => {
                let accessToken = '';
                if (typeof window !== 'undefined') {
                    accessToken = localStorage.getItem('access-token') ?? "";
                }
                if (!accessToken) {
                    router.push('/auth/login');
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