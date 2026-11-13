const { app, BrowserWindow, screen, ipcMain } = require('electron');

app.whenReady().then(() => {
  const SIZE = 400;
  const wa = screen.getPrimaryDisplay().workArea;
  const win = new BrowserWindow({
    width: SIZE, height: SIZE,
    x: wa.x + wa.width - SIZE - 20,
    y: wa.y + wa.height - SIZE - 20,
    transparent: true, frame: false, hasShadow: false,
    skipTaskbar: true, resizable: false,
    webPreferences: {
      autoplayPolicy: 'no-user-gesture-required',
      nodeIntegration: true, contextIsolation: false,
    },
  });
  win.loadFile('index.html');

  ipcMain.on('move', (_, x, y) => win.setPosition(Math.round(x), Math.round(y)));
  ipcMain.on('quit', () => app.quit());
});