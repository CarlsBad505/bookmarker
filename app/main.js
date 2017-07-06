const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', function() {
  console.log('Hello from Electron!');
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
});
