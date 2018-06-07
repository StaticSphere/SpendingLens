import { MenuItemConstructorOptions } from "electron";
import { fileMenu } from "./fileMenu";

export const menuTemplate: MenuItemConstructorOptions[] = [
    fileMenu
];