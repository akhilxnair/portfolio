// Import Modules
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';

// Import Styles
import '../styles/globals.scss';

// Import Components
// import NavBar from '../components/NavBar/NavBar';

const MyApp = ({ Component, pageProps }) => (
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
    {/* <NavBar /> */}
    <Component {...pageProps} />
  </>
);

Router.events.on('routeChangeStart', () => {
  console.log('Start');
});

Router.events.on('routeChangeComplete', () => {
  console.log('Done');
});

Router.events.on('routeChangeError', () => {
  console.log('Error');
});

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MyApp;
