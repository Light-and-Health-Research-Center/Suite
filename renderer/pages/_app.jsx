import React from "react";
import Header from "../components/Header";
import { ElectronProvider } from "../components/ElectronContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ElectronProvider>
      <Header />
      <Component {...pageProps} />
    </ElectronProvider>
  );
}

export default MyApp;
