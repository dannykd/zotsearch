import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>zotsearch</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Discover UCI courses using natural language" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics/>
      </Layout>
    </div>
  );
}
export default MyApp;
