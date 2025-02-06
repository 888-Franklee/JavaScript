# 三項演算子
## 基本的な例
```
const age = 18
const isAdult = age >= 18 ? '大人' : '未成年'
console.log(isAdult)  // "大人"
```
## 入れ子（ネスト）の例
```
const score = 85
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C'
console.log(grade)  // "B"
```
## 実用的な例：UIメッセージ
```
const loggedIn = true
const message = loggedIn ? 'ようこそ！' : 'ログインしてください。'
console.log(message)  // "ようこそ！"
```