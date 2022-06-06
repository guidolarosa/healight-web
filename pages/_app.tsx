import App from "next/app";
import Head from "next/head";
import './../styles/globals.css'
import { createContext, useEffect } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import { ThemeProvider } from 'styled-components'
import theme from "../utils/theme";
import AOS from 'aos';
import 'aos/dist/aos.css'

// Store Strapi Global object in context
export const GlobalContext = createContext({});
export const MainNavigationContext = createContext({});

const MyApp = ({ Component, pageProps } : any) => {
  const { 
    global, 
    mainNavigation 
  } = pageProps;

  useEffect(() => {
    AOS.init({
      offset: 380,
      duration: 500
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{pageProps.global.attributes.SiteName}</title>
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <MainNavigationContext.Provider value={mainNavigation.attributes}>
          <Component {...pageProps} />
        </MainNavigationContext.Provider>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx : any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      siteName: "*",
    },
  });
  const mainNavigationRes = await fetchAPI("/main-navigation", {
    populate: {
      MainNavigationLinks: '*'
    }
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { 
    global: globalRes.data, 
    mainNavigation: mainNavigationRes.data 
  } };
};

export default MyApp;