
# JavaScript `length` プロパティ紹介

##  基本的な概要

`length`は、JavaScriptにおける **配列、文字列、関数など** に使用されるプロパティで、それぞれの要素や文字数、引数の数などを取得するために使います。

---

## 🔸 1. 配列の`length`

- 配列の要素数（インデックスではなく**要素数**）を返します。

```js
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 出力: 3
```

- **注意点**：空の要素もカウントされます。

```js
const arr = [1, , 3];
console.log(arr.length); // 出力: 3
```

- `length`を手動で変更すると、配列が切り詰められることもあります。

```js
let nums = [1, 2, 3, 4, 5];
nums.length = 3;
console.log(nums); // 出力: [1, 2, 3]
```

---

## 🔸 2. 文字列の`length`

- 文字列の**文字数**を返します（サロゲートペアは考慮外）。

```js
const greeting = "Hello";
console.log(greeting.length); // 出力: 5
```

```js
const emoji = "😄";
console.log(emoji.length); // 出力: 2（サロゲートペア）
```

---

## 🔸 3. 関数の`length`

- 関数が**定義している引数の数**を返します（デフォルト値や残余引数は除外）。

```js
function sum(a, b, c) {}
console.log(sum.length); // 出力: 3

function example(a, b = 2, ...rest) {}
console.log(example.length); // 出力: 1
```

---

## 🔸 4. その他の用途

- `length`は`Array.from`や`arguments`オブジェクトでも使われます。

```js
function test() {
  console.log(arguments.length);
}
test(1, 2, 3); // 出力: 3
```

---

## 🔹 よくある注意点

- **ゼロベースではない**（例えば配列の最後のインデックスは `length - 1`）。
- サロゲートペア（絵文字など）は2文字としてカウントされる。
- 関数のデフォルト値は`length`にカウントされない。

