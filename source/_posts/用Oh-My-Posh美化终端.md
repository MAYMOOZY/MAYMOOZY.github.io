---
title: 用Oh-My-Posh美化终端
date: 2024-07-23 08:45:09
author: MAYMOOZY
tags: Terminal
---

> [!NOTE]
> 本文档主要讲述如何在Windows 10/11上使用OhMyPosh来美化终端，旨在快速上手。关于其他OS的配置方式以及其他更详尽的内容可以自行查阅[Oh My Posh官方文档](https://ohmyposh.dev/docs/)。
> 本文环境包含**最新的WindowsTerminal**和**Powershell 7**，Windows 11已经自带最新的WindowsTerminal（仍需自行安装[Powershell 7](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4#installing-the-msi-package)），Windows 10则需要用户自行下载安装。在[MicroSoftStore中搜索WindowsTerminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-cn&gl=US)并安装后，Win+R运行WT即可看到最新的Windows终端。


## 1 安装OhMyPosh

打开WT，运行以下安装命令：
```
winget install JanDeDobbeleer.OhMyPosh -s winget
```
安装完成后重启终端。

## 2 安装字体

OhMyPosh中包含许多的icon，这些icon都需要NerdFont字体的支持，所以需要安装NerdFont字体。

在WT中运行以下命令：
```
oh-my-posh font install --user
```
其中`--user`为可选参数，不带这个参数即表示以管理员权限为本机所有用户安装

![安装字体](Image_001.jpg "终端显示结果")

按WT提示，用⬆️或⬇️选择想要安装的字体，↩︎进行安装。

如果觉得麻烦或者没有找到自己想要的字体，可以去[Nerdfonts.com](https://www.nerdfonts.com/font-downloads)下载更多字体。下载解压后双击或右键安装.ttf字体文件即可安装到Windows。

> [!NOTE]
> 需要在`WindowsTerminal` -> `设置` -> `呈现` 中启用 `Use the new text renderer ("AtlasEngine")`来支持字体的显示。
> ![安装字体](Image_004.png "在设置中启用Atlasngine")

安装完成后需要在`settings.json`中配置字体来应用。在WindowsTerminal窗口中按组合键`Ctrl`+`Shift`+`,`，在Json文件中加入以下内容来应用字体：

![安装字体](Image_002.jpg "在Json中配置字体")


## 3 更换主题

更换主题可以从终端配置文件进行，在WT中输入以下指令打开配置文件：
```
notepad $PROFILE
```
如果弹出提示找不到相关文件，说明配置文件不存在，需要先执行下面的指令创建一个PROFILE再用👆的指令打开编辑：
```
New-Item -Path $PROFILE -Type File -Force
```

> [!NOTE]
> 某些情况下WT可能会阻止本地打开PROFILE，此时可以先运行以下指令解决：
> `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`
> 输入Y后回车即可

成功打开PROFILE文件后，添加以下内容:
```
oh-my-posh init pwsh --config 'oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/THEME.omp.json' | Invoke-Expression
```
其中 **THEME** 就是目标主题的名字。

所有主题均可在[官方文档主题页](https://ohmyposh.dev/docs/themes)找到。找到自己想要的主题后，复制主题名替换`--config` 后面参数中的 **THEME** 即可。

![安装字体](Image_005.jpg "官网主题页面")

例如我使用的是 **M365Princess** ，完整配置即为：
```
oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/M365Princess.omp.json' | Invoke-Expression
```

配置完后关闭PROFILE文件，在WT中输入以下指令应用配置：
```
. $PROFILE
```

最终效果如图：
![安装字体](Image_003.jpg "最终效果")

