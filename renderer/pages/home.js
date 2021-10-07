import React, { useEffect, useState } from "react";
import Head from "next/head";
import electron from "electron";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="text-blueGray-900 font-medium">home</div>
    </>
  );
}

export default Home;
