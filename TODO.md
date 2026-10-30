# 待補內容清單

網站上所有標有 **【待補】**、**【佔位】**、**【佔位圖】** 的地方都要換成你自己的內容。
可以在專案資料夾執行以下指令，找出所有還沒改的地方：

```bash
grep -rn "【待補】\|【佔位" src/
```

## 必改

- [ ] `src/site.config.ts`
  - [ ] `description`：網站的一句話描述
  - [ ] `author.name`：你的暱稱（建議不要用全名）
  - [ ] `author.tagline`：首頁的一句話介紹
  - [ ] `links`：確認 GitHub 連結正確，需要的話加上其他連結
- [ ] `src/pages/about.md`：「關於我」整頁內容

## 範例內容（換掉或刪除）

- [ ] `src/content/notes/` 裡的 4 篇範例筆記
- [ ] `src/content/projects/` 裡的 3 個範例作品
  - `personal-website.md` 可以保留，改成你自己的心得
- [ ] `src/content/activities/` 裡的 3 則範例活動

## 圖片

- [ ] 大頭照（選用）：放到 `public/images/`，再填入 `site.config.ts` 的 `author.avatar`
- [ ] 作品封面：替換 `public/images/projects/placeholder-*.svg`
- [ ] 活動照片：替換 `public/images/activities/placeholder-*.svg`
- [ ] 換完後刪除用不到的 `placeholder-*.svg`

## 部署

- [ ] GitHub repo → Settings → Pages → Source 選 **GitHub Actions**
- [ ] 把開發分支合併到 `main`
