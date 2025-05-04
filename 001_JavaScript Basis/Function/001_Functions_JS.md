
# JavaScriptの関数（Function）徹底解説

JavaScriptにおける関数は、「再利用可能な処理のまとまり」を定義するための基本的な構文要素です。柔軟で高機能な関数は、JavaScriptの中心的な要素です。

---

## ✅ 基本構文

###  関数宣言（Function Declaration）

```javascript
function greet(name) {
  return `こんにちは、${name}さん！`;
}
console.log(greet("田中")); // 出力: こんにちは、田中さん！
```

- 再宣言可能
- 巻き上げ（Hoisting）される

---

###  関数式（Function Expression）

```javascript
const greet = function(name) {
  return `こんにちは、${name}さん！`;
};
console.log(greet("佐藤"));
```

- 名前なし（無名関数）でも使用可能
- 巻き上げされない

---

###  アロー関数（Arrow Function）

```javascript
const greet = (name) => `こんにちは、${name}さん！`;
console.log(greet("山田"));
```

- より短く書ける
- `this` の挙動が異なる（親スコープを継承）

---

## ✅ 関数の引数と戻り値

###  デフォルト引数

```javascript
function greet(name = "ゲスト") {
  return `ようこそ、${name}さん`;
}
console.log(greet()); // ようこそ、ゲストさん
```

###  可変長引数（Rest パラメータ）

```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## ✅ 関数のスコープとクロージャ

###  スコープ

関数内で定義された変数は外からアクセスできません。

```javascript
function example() {
  let x = 10;
}
console.log(x); // エラー: x is not defined
```

###  クロージャ

関数が定義されたスコープを保持し続ける機能。

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## ✅ コールバック関数

関数を他の関数に渡すことで、動的な処理が可能になります。

```javascript
function processUserInput(callback) {
  const name = "ユーザー";
  callback(name);
}

processUserInput(function(name) {
  console.log(`こんにちは、${name}`);
});
```

---

## ✅ 即時関数（IIFE）

定義と同時に実行される関数です。

```javascript
(function() {
  console.log("即時実行されました");
})();
```

---

## ✅ 関数の種類まとめ

| 種類         | 特徴                          | 巻き上げ | `this` の扱い |
|--------------|-------------------------------|----------|----------------|
| 関数宣言     | 一般的、再利用しやすい        | あり     | 通常           |
| 関数式       | 柔軟、コールバックで多用       | なし     | 通常           |
| アロー関数   | 簡潔、`this` を継承            | なし     | 親スコープ     |

---

## ✅ 参考リンク

- [MDN Web Docs - 関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions)
- [JavaScript 関数の公式仕様 (ECMAScript)](https://tc39.es/ecma262/#sec-function-definitions)
