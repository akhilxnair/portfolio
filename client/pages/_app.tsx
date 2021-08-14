// Import Modules
import Head from 'next/head';
import { AppProps } from 'next/app';

// Import Styles
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="robots" content="all" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" content="Akhil Nair, Portfolio, Resume, AkhilxNair" />
      <meta name="author" content="Akhil Nair" />
      <meta name="description" content="Personal Portfolio page of Akhil Nair" />
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
