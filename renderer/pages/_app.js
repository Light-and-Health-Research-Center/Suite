import React from "react";
import Layout from "../components/layout/Layout";
import { ElectronProvider } from "../contexts/ElectronContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ElectronProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ElectronProvider>
  );
}

export default MyApp;
