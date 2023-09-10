import { BrowserWindow, shell } from "electron";
import { getPlatform } from "./get-device-specs";
import { join } from "path";
import {
  setCustomModelsFolderPath,
  setFolderPath,
  setImagePath,
  setOutputFolderPath,
  setOverwrite,
  setQuality,
  setSaveOutputFolder,
} from "./utils/config-variables";
import COMMAND from "./constants/commands";
import electronIsDev from "electron-is-dev";

let mainWindow: BrowserWindow | null;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    icon: join(__dirname, "build", "icon.png"),
    width: 1300,
    height: 940,
    minHeight: 500,
    minWidth: 500,
    show: false,
    backgroundColor: "#171717",
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      webSecurity: false,
      preload: join(__dirname, "preload.js"),
    },
    titleBarStyle: getPlatform() === "mac" ? "hiddenInset" : "default",
  });

  mainWindow.setMenuBarVisibility(false);
};

const getMainWindow = () => {
  return mainWindow;
};

export { createMainWindow, getMainWindow };
