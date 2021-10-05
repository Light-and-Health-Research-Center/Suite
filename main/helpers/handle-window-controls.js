export default function handleWindowControls(ipcMain, mainWindow) {
  mainWindow.on("maximize", () => {
    mainWindow.webContents.send("maximized", true);
  });
  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send("maximized", false);
  });
  ipcMain.on("close-window", () => {
    mainWindow.close();
  });
  ipcMain.on("minimize-window", () => {
    mainWindow.minimize();
  });
  ipcMain.on("maximize-window", () => {
    mainWindow.maximize();
  });
  ipcMain.on("unmaximize-window", () => {
    mainWindow.unmaximize();
  });
}
