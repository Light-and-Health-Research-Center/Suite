import { useContext, createContext } from "react";
import electron from "electron";

const ElectronContext = createContext({});

export function useElectron() {
  return useContext(ElectronContext);
}

export function ElectronProvider({ children }) {
  const ipcRenderer = electron.ipcRenderer;
  function closeWindow() {
    ipcRenderer.send("close-window");
  }
  function minimizeWindow() {
    ipcRenderer.send("minimize-window");
  }
  function maximizeWindow() {
    ipcRenderer.send("maximize-window");
  }

  const value = {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
  };

  return (
    <ElectronContext.Provider value={value}>
      {children}
    </ElectronContext.Provider>
  );
}
