import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow, getUsageSpecs, getVersion } from "./helpers";
import { autoUpdater } from "electron-updater";

autoUpdater.autoInstallOnAppQuit = false;

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  autoUpdater.checkForUpdatesAndNotify();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    frame: false,
  });

  getUsageSpecs(mainWindow);

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  getVersion(app, mainWindow);
  autoUpdater.on("update-downloaded", () => {
    mainWindow.webContents.send("updateDownloaded");
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
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("update", () => {
  autoUpdater.quitAndInstall();
});
