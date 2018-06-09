import { app } from 'electron';

export const fileMenu = {
    label: 'File',
    submenu: [
        {
            label: 'New Database',
            accelerator: 'CommandOrControl+N'
        },
        {
            label: 'Open Database',
            accelerator: 'CommandOrControl+O'
        },
        {
            type: 'separator'
        },
        {
            label: 'Backup Database',
            accelerator: 'CommandOrControl+Shift+B'
        },
        {
            type: 'separator'
        },
        {
            label: 'Exit',
            accelerator: 'CommandOrControl+Q',
            click: () => { app.quit(); }
        }
    ]
};