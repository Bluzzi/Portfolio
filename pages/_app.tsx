import "../lib/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Cursor from "../lib/components/specials/Cursor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Camille Dugas - Portfolio</title>
        
        <meta name="description" content="Hello! I'm Camille Dugas, a passionate full-stack web developer since 2016. I mainly work with the technologies proposed by the NodeJS universe." />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      {/* Special component */}
      <Cursor />
    </div>
  );
}

export default MyApp;
