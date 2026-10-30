// ============================================================
// 全站設定：名字、簡介、連結等都在這裡改，不需要動其他程式碼
// 標有【待補】的地方是佔位內容，請換成你自己的
// ============================================================

export const site = {
  // 網站名稱（顯示在頁首與瀏覽器分頁）
  title: 'echo4507',
  // 一句話描述（顯示在首頁與搜尋結果）
  description: '【待補】我在電腦資訊社的學習紀錄：筆記、作品與活動。',
  // 語言代碼
  lang: 'zh-TW',

  // ---------- 自我介紹 ----------
  author: {
    // 顯示的名字或暱稱
    name: '【待補】你的暱稱',
    // 首頁大標下方的一句介紹
    tagline: '【待補】電腦資訊社社員，正在學習程式設計與網頁開發。',
    // 大頭照：放在 public/images/ 後填路徑，例如 '/images/avatar.jpg'；留空字串則顯示名字縮寫
    avatar: '',
  },

  // ---------- 社群與外部連結（不需要的整行刪掉即可）----------
  links: [
    { label: 'GitHub', href: 'https://github.com/echo4507' },
    // { label: 'Email', href: 'mailto:you@example.com' },
  ],

  // ---------- 功能開關 ----------
  // 程式碼高亮的預設狀態（true = 開、false = 關）。
  // 訪客在筆記頁按「高亮」按鈕切換後，會以他自己的選擇為準。
  codeHighlight: true,

  // 不讓搜尋引擎收錄（true = 不收錄）
  noindex: true,
};

// 頁首導覽列（順序即顯示順序）
export const nav = [
  { label: '筆記', href: '/notes/' },
  { label: '作品', href: '/projects/' },
  { label: '活動', href: '/activities/' },
  { label: '關於', href: '/about/' },
];
