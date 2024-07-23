---
title: 用Chocolaty管理Windows包
date: 2024-07-23 09:20:54
author: MAYMOOZY
tags: chocolaty, windows, package-management
---

> [!NOTE]
> Chocolaty是一个命令行包管理软件，可以用于安装、卸载、管理Windows下的SDK、软件等。

## 安装Chocolaty

Powershell中输入以下指令安装Chocolaty：
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

安装完成后可以使用`choco -version`查看当前安装的Chocolaty版本并测试是否成功安装和设置环境变量。

## 使用Chocolaty安装Node.js

[Nodejs官网](https://nodejs.org/zh-cn/download/package-manager) 上已经说明了如何使用choco安装Nodejs，按照官网指引输入指令即可。

Powershell中输入安装NodeJs：
```
choco install nodejs-lts --version="20.15.1"
```

NodeJs会同时安装npm，安装完后重启终端，使用`node -v` 和 `npm -v` 检查是否成功安装。