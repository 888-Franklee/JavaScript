
# Math.random() の徹底解説

`Math.random()` は JavaScript の標準的なメソッドで、0 以上 1 未満の範囲の擬似乱数を生成します。ランダムな挙動を実現したいとき（例：ゲーム、抽選、ランダム選択など）に広く使われます。

---

## ✅ 基本構文

```
Math.random()
```

- 引数：なし
- 戻り値：0 以上 1 未満（例：0.37281921）の浮動小数点数

---

## ✅ 使用例

###  単純なランダム値の出力

```javascript
console.log(Math.random());
// 出力例: 0.732948271
```

###  0 以上 N 未満のランダムな整数（例：0〜9）

```javascript
const randomInt = Math.floor(Math.random() * 10);
console.log(randomInt);
// 出力例: 3（0〜9 の整数）
```

###  1 以上 N 以下のランダムな整数（例：1〜10）

```javascript
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);
// 出力例: 7（1〜10 の整数）
```

###  任意の範囲（min 〜 max）のランダムな整数

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(5, 15));
// 出力例: 10（5〜15 の整数）
```

---

## ✅ 補足情報

###  小数の範囲でランダム値を生成する

```javascript
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomFloat(1.5, 3.5));
// 出力例: 2.3485（1.5〜3.5 の間の浮動小数）
```

###  配列からランダムに要素を選ぶ

```javascript
const fruits = ["apple", "banana", "cherry", "orange"];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);
// 出力例: "banana"（ランダムな果物）
```

---

## ✅ 注意点

- `Math.random()` は「擬似乱数」であり、完全に予測不能なランダムではありません。
- セキュリティ用途（パスワード生成など）では `crypto.getRandomValues()` を使いましょう。

---

## ✅ 参考リンク

- [MDN Web Docs - Math.random() (日本語)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [JavaScript公式仕様（ECMAScript）](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.random)
