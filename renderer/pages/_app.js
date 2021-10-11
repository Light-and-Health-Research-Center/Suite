import React from "react";
import Layout from "../components/layout/Layout";
import { ElectronProvider } from "../contexts/ElectronContext";
import { RVPProvider } from "../contexts/RVPContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ElectronProvider>
      <RVPProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RVPProvider>
    </ElectronProvider>
  );
}

export default MyApp;
