# electron-vite-react

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/vite-react-electron?color=fa6470&style=flat)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/vite-react-electron?color=d8b22d&style=flat)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/vite-react-electron?style=flat)
[![Required Node.JS >= v14.17.0](https://img.shields.io/static/v1?label=node&message=%3E=14.17.0&logo=node.js&color=3f893e&style=flat)](https://nodejs.org/about/releases)

English | [็ฎไฝไธญๆ](README.zh-CN.md)

## Overview

๐ฆ Out of the box  
๐ช Support C/C++ addons  
๐ฉ Support Use ElectronใNode.js API in Renderer-process  
๐ฑ Simple directory structure๏ผreal flexible  
๐ฅ It's easy to implement multiple windows

## Quick start

```sh
npm create electron-vite
```

![electron-vite-react.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react.gif?raw=true)

## Debug

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react-debug.gif?raw=true)

## Directory structure

_๐จ By default, the files in `electron` folder will be built into the `dist/electron`_

```tree
โโโ electron                  Electron-related code
|   โโโ main                  Main-process source code
|   โโโ preload               Preload-script source code
|   โโโ resources             Resources for the production build
|       โโโ icon.icns             Icon for the application on macOS
|       โโโ icon.ico              Icon for the application
|       โโโ installerIcon.ico     Icon for the application installer
|       โโโ uninstallerIcon.ico   Icon for the application uninstaller
|
โโโ release                   Generated after production build, contains executables
|   โโโ{version}
|       โโโ {os}-unpacked     Contains unpacked application executable
|       โโโ Setup.{ext}       Installer for the application
|
โโโ public                    Static assets
โโโ src                       Renderer source code, your React application
```

## `dependencies` vs `devDependencies`

-   First, you need to know if your dependencies are needed after the application is packaged.

-   Like [serialport](https://www.npmjs.com/package/serialport), [sqlite3](https://www.npmjs.com/package/sqlite3) they are node-native modules and should be placed in `dependencies`. In addition, Vite will not build them, but treat them as external modules.

-   Dependencies like [Vue](https://www.npmjs.com/package/vue) and [React](https://www.npmjs.com/package/react), which are pure javascript modules that can be built with Vite, can be placed in `devDependencies`. This reduces the size of the application.

# LEGENDS

-   double armor
-   double in cover
-   in cover protects against 100% of damage
-   no longer regnerate HP, deal 25% more damage

PLAYTEST :: 1954030
DEMO ID :: 2050410 // not sure what this is: (732541)
MAIN APP :: 1827640
