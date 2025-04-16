
# JavaScript `filter()` メソッド紹介

##  概要

`filter()`は配列メソッドの一つで、**特定の条件に一致する要素だけを抽出して新しい配列を作る**ために使います。  
元の配列は変更されず、**新しい配列が返される**のがポイントです。

---

## 🔸 基本構文

```js
array.filter(callback(element, index, array), thisArg)
```

- **callback**: 各要素に対して実行される関数
  - `element`: 配列内の現在の要素
  - `index`: 現在のインデックス（省略可）
  - `array`: 元の配列全体（省略可）
- **thisArg**（省略可）: コールバック内で`this`として使われる値

---

## 🔸 基本例

```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // 出力: [2, 4]
```

---

## 🔸 応用例

### オブジェクトの配列を条件でフィルター

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Carol", age: 30 },
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);
// 出力: [{ name: "Alice", age: 25 }, { name: "Carol", age: 30 }]
```

### falsy 値を除外

```js
const mixed = [0, "hello", false, 42, "", null];
const truthy = mixed.filter(Boolean);
console.log(truthy); // 出力: ["hello", 42]
```

---

## 🔸 `filter`の特徴・注意点

- 元の配列は変更されない（**非破壊的**）。
- 条件に一致しない要素はスキップされる。
- 戻り値は常に新しい配列。

---

## 🔸 `map`や`forEach`との違い

| メソッド   | 主な用途                  | 戻り値         |
|------------|---------------------------|----------------|
| `filter()` | 条件に合う要素だけ抽出    | 新しい配列     |
| `map()`    | 各要素を変換              | 新しい配列     |
| `forEach()`| 各要素に対して副作用実行  | `undefined`     |
