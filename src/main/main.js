import { app, BrowserWindow, Menu } from 'electron';
import url from 'url';
import path from 'path';
import { menuTemplate } from './menus';

class Application {
    onWindowAllClosed() {
        if (process.platform !== 'darwin')
            app.quit();
    }

    onReady() {
        this.mainWindow = new BrowserWindow({ width: 800, height: 600});
        this.mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
        this.mainWindow.on('close', () => this.mainWindow = null);
        this.mainWindow.webContents.openDevTools();
    }

    start() {
        app.on('window-all-closed', this.onWindowAllClosed);
        app.on('ready', this.onReady);

        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
    }
}

const runtime = new Application();
runtime.start();