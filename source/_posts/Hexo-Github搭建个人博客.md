---
title: Hexo+Github搭建个人博客
date: 2024-07-23 09:21:06
author: MAYMOOZY
tags: hexo, blog, github
---


## 安装Hexo

在[Hexo中文官网](https://hexo.io/zh-cn/docs/) 可以查看详细说明。

在终端中输入以下指令安装Hexo：
```
npm install -g hexo-cli
```

用 `npm hexo -v` 查看Hexo版本。

## 搭建博客

选择一个空的目录作为Hexo博客文件所在目录，用以下指令初始化Hexo博客环境：
```
Hexo init <folder>
cd <folder>
npm install
```

初始化后目录下有一些初始文件：
- _config.yml：网站的配置文件，绝大多数参数都在此进行配置。配置项可在[官网](https://hexo.io/zh-cn/docs/configuration)查询。
- package.json：网站依赖的应用程序的配置信息，根据官网说明，Hexo默认安装了EJS、Stylus和Markdown渲染引擎
- scaffolds：文章模板目录
- source：资源目录，用来存放资源
- - 除了`_posts`之外，以下划线开头的文件/文件夹、隐藏文件都会被忽略。
- - Markdown文件会被解析存放到`public`目录
- Theme：存放主题的目录
