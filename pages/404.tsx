import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {URLManager} from "@shared/url-manager";

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    const timerFunction = setTimeout(() => {
      router.push(URLManager.getHomeURL());
    }, 3000);
    return () => clearTimeout(timerFunction);
  }, []);

  const styles: React.CSSProperties = {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      <div>СТРАНИЦА НЕ НАЙДЕНА</div>
    </div>
  );
}
