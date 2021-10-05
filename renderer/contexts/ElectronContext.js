import { useContext, useState, useEffect, createContext } from "react";
import electron from "electron";

const ElectronContext = createContext({});

export function useElectron() {
  return useContext(ElectronContext);
}

export function ElectronProvider({ children }) {
  const ipcRenderer = electron.ipcRenderer;
  const [maximized, setMaximized] = useState(false);
  const [version, setVersion] = useState("");
  const [updateReady, setUpdateReady] = useState(false);

  useEffect(() => {
    ipcRenderer.on("maximized", (e, data) => {
      setMaximized(data);
    });
    ipcRenderer.on("version", (e, data) => {
      setVersion(data);
    });
    ipcRenderer.on("updateDownloaded", (e, data) => {
      setUpdateReady(true);
    });
  }, []);

  function closeWindow() {
    ipcRenderer.send("close-window");
  }
  function minimizeWindow() {
    ipcRenderer.send("minimize-window");
  }
  function maximizeWindow() {
    ipcRenderer.send("maximize-window");
  }
  function unmaximizeWindow() {
    ipcRenderer.send("unmaximize-window");
  }
  function update() {
    ipcRenderer.send("update");
  }

  const value = {
    updateReady,
    version,
    maximized,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    unmaximizeWindow,
    update,
  };

  return (
    <ElectronContext.Provider value={value}>
      {children}
    </ElectronContext.Provider>
  );
}
