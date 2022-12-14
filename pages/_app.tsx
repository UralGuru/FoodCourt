import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@store/store';
import '@styles/index.css';
import {Navbar} from "@components/navbar/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
        <Navbar />
    </Provider>
  );
}

export default MyApp;
