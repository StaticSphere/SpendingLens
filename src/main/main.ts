import { app, BrowserWindow, MenuItemConstructorOptions, Menu } from 'electron';
import * as url from 'url';
import * as path from 'path';
import { menuTemplate } from './menus';

class Application {
    private mainWindow: BrowserWindow;

    private onWindowAllClosed(): void {
        if (process.platform !== 'darwin')
            app.quit();
    }

    private onReady(): void {
        this.mainWindow = new BrowserWindow({ width: 800, height: 600});
        this.mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
        this.mainWindow.on('close', () => this.mainWindow = null);
    }

    start(): void {
        app.on('window-all-closed', this.onWindowAllClosed);
        app.on('ready', this.onReady);

        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
    }
}

const runtime = new Application();
runtime.start();