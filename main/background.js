import { app, ipcMain } from "electron";
import serve from "electron-serve";
import {
  createWindow,
  getUsageSpecs,
  getVersion,
  handleWindowControls,
  handleUpdate,
} from "./helpers";
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
    minWidth: 800,
    minHeight: 400,
    frame: false,
    show: false,
  });

  getUsageSpecs(mainWindow);

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.openDevTools();
  }

  mainWindow.show();

  getVersion(app, mainWindow);
  handleWindowControls(ipcMain, mainWindow);
  handleUpdate(mainWindow, ipcMain, autoUpdater);
})();

app.on("window-all-closed", () => {
  app.quit();
});
