import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>INSERT_APP_NAME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
export default MyApp;
