export default function handleUpdate(mainWindow, ipcMain, autoUpdater) {
  autoUpdater.on("update-downloaded", () => {
    mainWindow.webContents.send("updateDownloaded");
  });
  ipcMain.on("update", () => {
    autoUpdater.quitAndInstall();
  });
}
