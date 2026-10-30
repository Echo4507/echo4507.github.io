---
title: 【佔位】Python 入門：變數與型別
description: 【佔位】第一堂社課筆記，認識變數、字串、數字與 print()。
date: 2026-10-01
tags: [python, 入門]
---

> 【佔位】這是一篇範例筆記，示範各種格式長什麼樣子。請換成你自己的內容，或直接刪除這個檔案。

## 變數是什麼

變數就像一個貼了名字的盒子，可以把資料放進去，之後用名字拿出來。

```python
name = "小明"
age = 16
height = 170.5

print(name, age, height)
```

## 常見的型別

| 型別 | 例子 | 說明 |
| --- | --- | --- |
| `int` | `42` | 整數 |
| `float` | `3.14` | 小數 |
| `str` | `"hello"` | 字串 |
| `bool` | `True` | 真或假 |

可以用 `type()` 查看型別：

```python
print(type(42))       # <class 'int'>
print(type("hello"))  # <class 'str'>
```

## 今天踩到的坑

字串和數字不能直接相加：

```python
age = 16
print("我今年" + age + "歲")   # TypeError!
print(f"我今年{age}歲")        # 用 f-string 就沒問題
```

## 小結

- 變數名稱要有意義
- 不確定型別時用 `type()` 檢查
- 組合字串優先用 f-string
