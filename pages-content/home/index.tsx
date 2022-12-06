import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UrlManager } from '@shared/urls';
import { useRouter } from 'next/router';
import React from 'react';
import { clearMessage } from '@store/slices/authSlice';

export const HomePageContent: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(clearMessage());
    if (!user.isLoggedIn) router.push(UrlManager.login);
  }, [user.isLoggedIn]);

  return (
    <React.Fragment>
      <div>accessToken: {user.accessToken}</div>
    </React.Fragment>
  );
};
