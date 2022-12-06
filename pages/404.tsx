import {useEffect} from "react";
import {useRouter} from "next/router";
import {UrlManager} from "@shared/urls";

export default function PageNotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push(UrlManager.home)
        }, 3000)
    }, [])

    return (
        <div style={{
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <div>СТРАНИЦА НЕ НАЙДЕНА</div>
        </div>
    )
}
