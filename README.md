# echo4507.github.io

我在電腦資訊社的學習網站：學習筆記、作品、活動紀錄。

- 網址：<https://echo4507.github.io>
- 技術：[Astro](https://astro.build/)（靜態網站）＋ [Pagefind](https://pagefind.app/)（站內搜尋）
- 部署：GitHub Pages（推送到 `main` 後自動部署）

---

## 一、在自己電腦上預覽

### 第一次要先準備

1. 安裝 **Node.js 24 LTS**（<https://nodejs.org/>）。Astro 7 需要 Node.js 22.23.4 以上。
   安裝好後在終端機輸入 `node -v` 確認版本。
2. 下載這個專案並安裝套件：

```bash
git clone https://github.com/echo4507/echo4507.github.io.git
```

```bash
cd echo4507.github.io
```

```bash
npm install
```

### 平常寫內容時

```bash
npm run dev
```

打開瀏覽器到 <http://localhost:4321>。修改檔案存檔後，網頁會自動更新。按 `Ctrl + C` 結束。

> 搜尋功能在 `npm run dev` 底下不會運作（索引要建置後才會產生）。想測試搜尋請用下面的方式。

### 預覽正式版（含搜尋）

```bash
npm run build
```

```bash
npm run preview
```

---

## 二、怎麼改內容

**原則：只需要改 `src/content/`、`src/pages/about.md`、`src/site.config.ts` 和 `public/images/`，不需要碰其他程式碼。**

```
src/
├── site.config.ts        ← 名字、自我介紹、社群連結、功能開關
├── pages/about.md        ← 「關於我」頁面
└── content/
    ├── notes/            ← 學習筆記（一篇一個 .md）
    ├── projects/         ← 作品（一件一個 .md）
    └── activities/       ← 活動紀錄（一則一個 .md）
public/
└── images/               ← 圖片
```

### 新增一篇筆記

1. 複製 `src/content/notes/_template.md`，改成新檔名，例如 `2026-11-01-python-loops.md`。
   - **檔名會變成網址**：`/notes/2026-11-01-python-loops/`。建議只用英文小寫、數字和 `-`。
   - 檔名開頭是 `_` 的檔案不會發布（所以範本本身不會出現在網站上）。
2. 修改檔案最上方 `---` 之間的資料（稱為 frontmatter）：

```yaml
---
title: Python 迴圈
description: for 和 while 的差別   # 可省略
date: 2026-11-01
tags: [python, 入門]
draft: false                       # true = 先不發布
---
```

3. 在下方用 Markdown 寫內文。程式碼區塊在 ```` ``` ```` 後面寫語言名稱就會有顏色：

````markdown
```python
for i in range(3):
    print(i)
```
````

常用語言名稱：`python`、`html`、`css`、`js`、`bash`、`c`、`cpp`、`java`。

### 新增作品／活動

一樣複製該資料夾裡的 `_template.md` 來改。

- **作品**：`featured: true` 會優先顯示在首頁；`cover` 是封面圖（建議 16:9）；`demo`、`repo` 填網址會出現按鈕。
- **活動**：`photos` 可以放多張照片，每張都要寫 `alt`（照片的文字說明）。

### 加圖片

1. 把圖片放進 `public/images/`（可以再分資料夾）。
2. 用 `/images/...` 開頭的路徑引用，例如 `public/images/notes/loop.png` → `/images/notes/loop.png`。
3. 筆記內文中：`![圖片說明](/images/notes/loop.png)`

> 建議：圖片先壓縮（寬度 1600px 以內），網站會比較快。活動照片如果有拍到同學，請先徵得同意。

### 修改個人資料與設定

打開 `src/site.config.ts`，裡面每一項都有中文註解：

| 設定 | 說明 |
| --- | --- |
| `author.name` / `tagline` | 首頁顯示的名字與一句話介紹 |
| `author.avatar` | 大頭照路徑；留空會顯示名字的第一個字 |
| `links` | 頁尾的社群連結 |
| `codeHighlight` | 程式碼高亮預設開或關（訪客可在筆記頁自行切換） |
| `noindex` | `true` = 不讓搜尋引擎收錄 |

### 修改顏色

所有顏色都在 `src/styles/global.css` 最上方的 CSS 變數，淺色、深色模式各一組。例如橘色強調色是 `--accent`。

---

## 三、功能說明

- **深色模式**：預設跟隨系統，按頁首的月亮／太陽圖示可手動切換，會記住選擇。
- **程式碼高亮開關**：有程式碼的筆記和作品頁，標題下方有「程式碼高亮：開／關」按鈕。切換後全站套用並記住；預設值在 `site.config.ts` 的 `codeHighlight`。
- **搜尋**：頁首放大鏡圖示，可搜尋筆記、作品、活動內容。
- **標籤**：筆記頁上方可依標籤篩選。
- **不被搜尋引擎收錄**：所有頁面都有 `noindex`。注意這**不是密碼保護**——知道網址的人仍然看得到，請不要放敏感資料。

---

## 四、部署

### 第一次設定（只需做一次）

1. 到 GitHub 上這個 repo → **Settings** → **Pages**。
2. **Build and deployment** → **Source** 選 **GitHub Actions**。

### 之後每次更新

把修改推送（或合併）到 `main` 分支，GitHub Actions 會自動建置並部署，約 1–2 分鐘後網站就會更新。

```bash
git add .
```

```bash
git commit -m "新增筆記：Python 迴圈"
```

```bash
git push
```

部署進度可以在 repo 的 **Actions** 分頁查看；失敗時點進去看錯誤訊息（最常見的是 frontmatter 格式寫錯，例如日期格式不對或少了 `title`）。

---

## 五、專案結構（給想改程式的時候參考）

```
src/
├── components/   ← 可重複使用的區塊（頁首、筆記列表、作品卡片、切換按鈕…）
├── layouts/      ← 頁面外框（Base.astro 是所有頁面共用的 <head>、頁首、頁尾）
├── lib/          ← 讀取內容的共用函式
├── pages/        ← 每個檔案對應一個網址
├── styles/       ← 全站 CSS
└── content.config.ts ← 筆記、作品、活動可以填哪些欄位
.github/workflows/deploy.yml ← 自動部署設定
```
