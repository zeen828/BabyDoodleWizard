# 小朋友畫的精靈

```flow
s=start:開始
e=end:結束
o=operation:操作項
s-o-e
```

## 企劃書修改紀錄
| 日期 | 修改人 | 對應版本 | 修訂內容 |
| :----: | :----: | :----: | :----: |
| 2021/02/22 | Will | V0.0 | 起搞 |

## 目錄
<details>
<summary>展开查看</summary>
<pre><code>

├──簡介
├──遊戲概念
├──預期目標
├──
└── 
</code></pre>
</details>


## 簡介
類型：跟神奇寶貝gaole一樣的玩法，收集小朋友畫怪物
平台：Web網頁式
遊玩人數：1~2
客群：玩過gaole的玩家(全年齡)
獲利模式：廣告跟贊助

## 遊戲概念
透過時下流行的寶可夢gaole玩法，將精靈球替換成其他東西，精靈則收集小朋友畫的怪物畫，遊戲玩法大致一樣當作一個前端的練習跟風一波蹭流量。

## 預期目標
可以自行上傳小朋友畫像建立精靈，後期如有可愛熱門的可以發行周邊販售紀念或贊助贈紀念品。

## 流程
st=>start: 註冊印象筆記
e=>end: 您可以使用markdown
op1=>operation: 登入印象筆記
op2=>operation: 購買並登入馬克飛象
cond=>condition: 是否已經購買並登入了馬克飛象?

st->op1->cond
cond(yes)->e
cond(no)->op2->e

<details>
<summary>展开查看</summary>
<pre><code>

   ```mermaid
    flowchat
    st=>start: 開始
    e=>end: 結束
    op=>operation: 操作
    sub1=>subroutine: 子程式
    cond=>condition: Yes or No?
    io=>inputoutput: 輸入/輸出
    st->op->cond
    cond(yes)->io->e
    cond(no)->sub1(right)->op
   ```
</code></pre>
</details>

## 規劃畫面
<details>
<summary>展开查看</summary>
<pre><code>

主要畫面
1. 主動畫
2. 目錄選單
    1. 註冊(`#後期應用需要，上傳紀錄和投票`)
3. 遊戲-對戰捕獲
    1. 三選一
    2. 呼喚
    3. 挑選出戰角色(`#無角色可以無償隨機租借`)
    4. 對戰
    5. 道具捕獲
4. 遊戲-立即捕獲
    1. 九回合捕獲
5. 遊戲-活動對戰
    1. 挑選出戰角色
    2. 對戰
    3. 評分
    4. 獲得
6. 事件
    1. 反擊
    2. 支援
    4. 道具
    5. 交換
</code></pre>
</details>

## 控制項目
透過鍵盤或按鈕上下左右操作，寫在控制項目裡面搭配vuex做狀態統一。

> ## 1.主動畫
> 待完成基礎再做。

> ## 2.目錄選單
> ### 畫面功能
> 1. 有廣告
> 2. 三個遊戲選項
>     選擇的項目作放大縮小效果
> 3. 控制項目畫面
> 
> ### 變數
> 1. 選擇項目
> 2. 項目目前流程進度
> 3. 累計資訊(星幣)
> 4. 事件觸發
> 5. 控制(上，下，左，右，Z，M)
> 
> ### 2-1.註冊

> ## 3.遊戲-對戰捕獲
> ### 畫面功能

> ## 4.遊戲-立即捕獲
> ### 畫面功能

> ## 5.遊戲-活動對戰
> ### 畫面功能

> ## 6.事件
> ### 畫面功能

## 運作教學
<details>
<summary>展开查看</summary>
<pre><code>

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
</code></pre>
</details>
