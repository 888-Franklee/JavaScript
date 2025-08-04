
# Math.floor() の紹介

## 1. 概要

`Math.floor()` は、JavaScript の標準オブジェクト `Math` に属する関数で、  
**引数として与えられた数値以下の最大の整数を返す**メソッドです。

---

## 2. 構文

```javascript
Math.floor(x)
```

- **x**：任意の数値

---

## 3. 説明

`Math.floor()` は、**小数点以下を切り捨て**て、最も近い小さい整数を返します。  
負の数でも切り捨て方向（下方向）は変わりません。

---

## 4. 使用例

```javascript
Math.floor(4.9);   // 結果: 4
Math.floor(4.1);   // 結果: 4
Math.floor(-4.1);  // 結果: -5
Math.floor(-4.9);  // 結果: -5
```

---

## 5. 使用場面の例

### 1. 小数を整数に切り捨てるとき

```javascript
let value = 7.8;
let integer = Math.floor(value);  // → 7
```

### 2. ランダムな整数を生成する（0〜n-1）

```javascript
let random = Math.floor(Math.random() * 10);  // 0～9 の整数
```

### 3. ページネーションなどの処理で整数化が必要なとき

```javascript
let totalPages = Math.floor(totalItems / itemsPerPage);
```

---

## 6. 注意点

- `Math.floor()` は引数が `NaN` の場合は `NaN` を返します。
- `Math.round()`（四捨五入）や `Math.ceil()`（切り上げ）と混同しないように注意！

---

## 7. 関連メソッド

| メソッド         | 動作       |
|------------------|------------|
| `Math.ceil(x)`   | x 以上の最小の整数（切り上げ） |
| `Math.round(x)`  | 最も近い整数（四捨五入）     |
| `Math.trunc(x)`  | 小数部分を単純に切り捨て（ES6以降） |

---
