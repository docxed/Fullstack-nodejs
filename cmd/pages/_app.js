import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../assets/css/index.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function _app({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
    <>
      <Head>
        <title>CMS System</title>
        {/* Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container" style={{ marginTop: 80, marginBottom: 50 }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
