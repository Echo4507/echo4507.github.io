---
title: 【佔位】猜數字遊戲
description: 【佔位】用 Python 寫的終端機小遊戲，練習迴圈與條件判斷。
date: 2026-10-15
tech: [Python]
cover: /images/projects/placeholder-2.svg
coverAlt: 【佔位】遊戲執行畫面
---

> 【佔位】範例作品，請替換成你自己的內容。

## 這是什麼

電腦隨機選一個 1 到 100 的數字，玩家猜，電腦提示「太大」或「太小」。

## 核心程式碼

```python
import random

answer = random.randint(1, 100)
while True:
    guess = int(input("猜一個數字："))
    if guess > answer:
        print("太大了")
    elif guess < answer:
        print("太小了")
    else:
        print("答對了！")
        break
```

## 學到什麼

【佔位】例如：`while True` 搭配 `break`、如何處理使用者輸入不是數字的情況。
