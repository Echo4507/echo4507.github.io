---
title: 【佔位】HTML 的基本結構
description: 【佔位】一個網頁由哪些部分組成？head、body 與常用標籤。
date: 2026-10-12
tags: [html, 網頁, 入門]
---

> 【佔位】範例筆記，請替換成你自己的內容。

## 最小的 HTML 檔案

```html
<!doctype html>
<html lang="zh-TW">
  <head>
    <meta charset="utf-8" />
    <title>我的第一個網頁</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>這是一個段落。</p>
  </body>
</html>
```

## head 和 body 的差別

- **head**：給瀏覽器看的資訊，例如標題、編碼，不會顯示在畫面上
- **body**：真正顯示在畫面上的內容

## 常用標籤

### 文字

`<h1>` 到 `<h6>` 是標題，`<p>` 是段落，`<a>` 是連結。

### 圖片

```html
<img src="cat.jpg" alt="一隻橘貓在睡覺" />
```

`alt` 很重要：圖片載入失敗或使用螢幕報讀器的人，會看到（聽到）這段文字。
