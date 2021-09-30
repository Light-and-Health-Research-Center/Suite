import os from "os-utils";

export default function getUsageSpecs(mainWindow) {
  setInterval(() => {
    os.cpuUsage(function (v) {
      let cpuUsage = v * 100;
      let freeMemoryPercentage = os.freememPercentage() * 100;
      let systemMemory = os.totalmem() / 1024;
      mainWindow.webContents.send("cpuUsage", cpuUsage);
      mainWindow.webContents.send("freeMemoryPercentage", freeMemoryPercentage);
      mainWindow.webContents.send("systemMemory", systemMemory);
    });
  }, 100);
}
