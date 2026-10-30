// 讀取內容的共用函式：排除草稿、依日期由新到舊排序
import { getCollection } from 'astro:content';

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getNotes() {
  return (await getCollection('notes', ({ data }) => !data.draft)).sort(byDateDesc);
}

export async function getProjects() {
  return (await getCollection('projects', ({ data }) => !data.draft)).sort(byDateDesc);
}

export async function getActivities() {
  return (await getCollection('activities', ({ data }) => !data.draft)).sort(byDateDesc);
}

// 回傳所有標籤及其筆記數量，依數量多到少排序
export async function getTags() {
  const counts = new Map<string, number>();
  for (const note of await getNotes()) {
    for (const tag of note.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

// 日期顯示成 2026-10-30
export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
