import React from 'react';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '@store/slices/authSlice';
import { UrlManager } from '@shared/urls';

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
