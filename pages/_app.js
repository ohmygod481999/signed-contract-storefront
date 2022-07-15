import App from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
// import "../public/css/bootstrap.min.css";
import Head from "next/head";
import Script from "next/script";
import { StoreProvider } from "../context/store-context";
import { DisplayProvider } from "../context/display-context";
import { fetchAPI } from "../utils/api";
import { getStrapiMedia } from "../utils/media";
import { get } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../scripts/loader"

function MyApp({ Component, pageProps }) {
    const { global } = pageProps;

    console.log(global);

    return (
        <StoreProvider>
            <DisplayProvider global={global}>
                <ToastContainer style={{
                    zIndex: 13001
                }}/>
                <Layout>
                    <Head>
                        {get(global, "attributes") && (
                            <>
                                <link
                                    rel="shortcut icon"
                                    href={getStrapiMedia(
                                        get(global, "attributes.favicon")
                                    )}
                                />
                                <title>
                                    {get(global, "attributes.site_name")}
                                </title>
                            </>
                        )}

                        <link rel="stylesheet" href="/css/bootstrap.min.css" />
                        <link rel="stylesheet" href="/css/animate.css" />
                        <link rel="stylesheet" href="/css/jquery-ui.min.css" />
                        <link rel="stylesheet" href="/css/owl.carousel.css" />
                        <link
                            rel="stylesheet"
                            href="/css/font-awesome.min.css"
                        />
                        <link
                            rel="stylesheet"
                            href="/css/jquery.fancybox.min.css"
                        />
                        <link
                            rel="stylesheet"
                            href="/css/material-design-iconic-font.min.css"
                        />
                        <link rel="stylesheet" href="/css/nivo-slider.css" />
                        <link rel="stylesheet" href="/css/slider.css" />
                        <link rel="stylesheet" href="/css/default.css" />
                        <link rel="stylesheet" href="/css/meanmenu.css" />
                        <link rel="stylesheet" href="/css/style.css" />
                        <link
                            rel="stylesheet"
                            href="/css/responsive.css"
                        ></link>
                    </Head>
                    <Script src="/js/vendor/modernizr-2.8.3.min.js" />
                    <Component {...pageProps} />

                    <Script
                        src="/js/vendor/jquery.min.js"
                        strategy="beforeInteractive"
                    />

                    {/* <Script
                        src="/js/bootstrap.min.js"
                        strategy="beforeInteractive"
                    /> */}

                    <Script
                        src="/js/owl.carousel.min.js"
                        strategy="beforeInteractive"
                    />

                    {/* <Script src="/js/jquery.meanmenu.js" strategy="beforeInteractive"/>

            <Script src="/js/jquery-ui.min.js" strategy="beforeInteractive"/>

            <Script src="/js/wow.min.js" strategy="beforeInteractive"/>

            <Script src="/js/plugins.js" strategy="beforeInteractive"/>

            <Script src="/js/slider/jquery.nivo.slider.pack.js" strategy="beforeInteractive"/>

            <Script src="/js/jquery.fancybox.js" strategy="beforeInteractive"/>

            <Script src="/js/slider/nivo-active.js" strategy="afterInteractive"/>

            <Script src="/js/jquery.counterup.min.js" strategy="beforeInteractive"/>

            <Script src="/js/jquery.treeview.js" strategy="beforeInteractive"/> */}

                    {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-IIoucJ-70FQg6xZsORjQCUPHCVj9GV4" strategy="afterInteractive"/> */}

                    {/* <Script src="/js/google-map.js" strategy="afterInteractive"/> */}

                    {/* <Script src="/js/main.js" strategy="beforeInteractive"/> */}
                </Layout>
            </DisplayProvider>
        </StoreProvider>
    );
}

MyApp.getInitialProps = async (ctx) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctx);

    // Fetch global site settings from Strapi
    const globalRes = await fetchAPI("/global", {
        populate: "*",
    });
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
