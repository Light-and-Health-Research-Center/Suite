import { autoUpdater } from "electron-updater";

export default function handleUpdates() {
  autoUpdater.checkForUpdatesAndNotify();
}
