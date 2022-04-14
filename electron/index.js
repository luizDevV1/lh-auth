// electron/index.js
const path = require("path");
const { app, BrowserWindow } = require("electron");
require("dotenv").config();

const isDev = !!process.env.IS_DEV;

function createWindow() {
  const main_window = new BrowserWindow({
    width: 1200,
    height: 900,
    minWidth: 720,
    minHeight: 480,
    frame: false,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#483d8b",
      symbolColor: "#ffffff",
      height: 32,
    },
    webPreferences: {
      nodeIntegration: true,
    },
  });
  main_window
    .loadURL(
      isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../dist/index.html")}`
    )
    .then(() => {
      console.log("Bem vindo!");
      console.log("\n Dev-tools  'Ctrl + Shift + i'");
      console.log(`PROCESS: ${process.env.ELECTRON}`);
    });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
