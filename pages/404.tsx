import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { UrlManager } from '@shared/urls';

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    const timerFunction = setTimeout(() => {
      router.push(UrlManager.home);
    }, 3000);
    return () => clearTimeout(timerFunction);
  }, []);

  const styles: React.CSSProperties = {
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
  }

  return (
    <div style={styles}
    >
      <div>СТРАНИЦА НЕ НАЙДЕНА</div>
    </div>
  );
}
