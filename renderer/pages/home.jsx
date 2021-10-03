import React, { useEffect, useState } from "react";
import Head from "next/head";
import electron from "electron";

function Home() {
  const ipcRenderer = electron.ipcRenderer;
  const [cpuUsage, setCpuUsage] = useState(0);
  const [freeMemoryPercentage, setFreeMemoryPercentage] = useState(0);
  const [systemMemory, setSystemMemory] = useState(0);
  const [version, setVersion] = useState("");
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateDownloaded, setUpdateDownloaded] = useState(false);
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const update = () => {
    ipcRenderer.send("update");
  };
  useEffect(() => {
    ipcRenderer.on("cpuUsage", (e, data) => {
      setCpuUsage(data);
    });
    ipcRenderer.on("freeMemoryPercentage", (e, data) => {
      setFreeMemoryPercentage(data);
    });
    ipcRenderer.on("systemMemory", (e, data) => {
      setSystemMemory(data);
    });
    ipcRenderer.on("version", (e, data) => {
      setVersion(data);
    });
    ipcRenderer.on("updateAvailable", (e, data) => {
      setShowUpdateNotification(true);
      setUpdateAvailable(true);
    });
    ipcRenderer.on("updateDownloaded", (e, data) => {
      console.log("here");
      setUpdateDownloaded(true);
    });
  }, [ipcRenderer]);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <p>version: {version}</p>
      <p>CPU Usage: {cpuUsage.toFixed(2)}</p>
      <p>System Memory: {systemMemory.toFixed(2)} GB</p>
      <p>Free Memory: {freeMemoryPercentage.toFixed(2)} %</p>
      <div
        className={`${showUpdateNotification ? "block" : "hidden"} border-2`}
      >
        <p>Update Available.</p>
        <p>
          {updateDownloaded ? (
            <>
              <span>Downloaded</span>
              <button
                onClick={() => {
                  update();
                }}
              >
                Update
              </button>
            </>
          ) : (
            <span>Downloading</span>
          )}
        </p>
      </div>
    </>
  );
}

export default Home;
