export default function getVersion(app, mainWindow) {
  mainWindow.webContents.send("version", app.getVersion());
}
