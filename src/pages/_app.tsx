// src/pages/_app.tsx
import Head from 'next/head';
import '../styles/global.css';  // Ensure the correct path
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fusha AI</title>
        <meta name="description" content="Admin panel for Fusha AI" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
