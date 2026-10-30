// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://echo4507.github.io',
  markdown: {
    shikiConfig: {
      // 淺色、深色模式各用一套程式碼配色；顏色以 CSS 變數輸出，由 global.css 決定顯示哪一套
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
  },
});
