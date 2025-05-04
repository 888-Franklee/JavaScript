
#  JavaScript の Math オブジェクト完全ガイド

JavaScript の `Math` オブジェクトは、数学的な計算を行うための組み込みオブジェクトです。**定数**や**数学関数**を静的に提供し、日常の数値操作から高度な演算までを網羅しています。

---

## ✅ Math オブジェクトの基本情報

- `Math` は **静的オブジェクト**で、コンストラクタは存在しません。
- `new Math()` のようにインスタンス化することはできません。
- `Math` に属する関数はすべて静的で、`Math.` をつけて呼び出します。

---

## ✅ 数学定数一覧

| 定数名             | 内容                         | 値（例）               |
|--------------------|------------------------------|------------------------|
| `Math.E`           | ネイピア数（自然対数の底）   | 2.718281828...         |
| `Math.LN2`         | ln(2)                         | 0.69314718056...       |
| `Math.LN10`        | ln(10)                        | 2.30258509299...       |
| `Math.LOG2E`       | log₂(e)                       | 1.44269504089...       |
| `Math.LOG10E`      | log₁₀(e)                      | 0.43429448190...       |
| `Math.PI`          | 円周率 π                      | 3.14159265359...       |
| `Math.SQRT1_2`     | √1/2                          | 0.70710678118...       |
| `Math.SQRT2`       | √2                            | 1.41421356237...       |

---

## ✅ 数学関数の分類と詳細

###  丸め系

| 関数              | 説明                             | 使用例                       |
|-------------------|----------------------------------|------------------------------|
| `Math.round(x)`   | 四捨五入                         | `Math.round(2.5)` → 3       |
| `Math.floor(x)`   | 小数点以下切り捨て               | `Math.floor(2.9)` → 2       |
| `Math.ceil(x)`    | 小数点以下切り上げ               | `Math.ceil(2.1)` → 3        |
| `Math.trunc(x)`   | 小数点を切り捨て整数部分を返す   | `Math.trunc(-4.9)` → -4     |

---

###  最大・最小値

```javascript
Math.max(4, 12, 8); // 12
Math.min(4, 12, 8); // 4
```

---

###  累乗・平方根・指数

```javascript
Math.pow(3, 2);     // 9
3 ** 2;             // 9（ES2016 の演算子）
Math.sqrt(49);      // 7
Math.cbrt(27);      // 3（立方根）
Math.exp(2);        // e^2 ≒ 7.389
```

---

###  三角関数

```javascript
Math.sin(Math.PI / 2); // 1
Math.cos(0);           // 1
Math.tan(Math.PI / 4); // ≒ 1
```

###  逆三角関数

```javascript
Math.asin(1);         // π/2 ≒ 1.5708
Math.acos(0);         // π/2
Math.atan(1);         // π/4
Math.atan2(3, 4);     // y=3, x=4 の角度（ラジアン）を返す
```

---

###  対数と指数

```javascript
Math.log(10);       // ln(10)
Math.log10(1000);   // 3
Math.log2(8);       // 3
```

---

###  絶対値と符号

```javascript
Math.abs(-42);      // 42
Math.sign(-7);      // -1
Math.sign(0);       // 0
Math.sign(7);       // 1
```

---

## ✅ 乱数の活用

```javascript
Math.random(); // 0以上1未満の小数（例: 0.3853）
```

### ✅ 任意の範囲の整数生成：

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 6); // サイコロの目など
```

---

## ✅ 実践的な使用例

###  角度（度）をラジアンに変換

```javascript
function toRadians(degree) {
  return degree * (Math.PI / 180);
}
```

###  ベクトルの長さを求める

```javascript
function getVectorLength(x, y) {
  return Math.sqrt(x * x + y * y);
}
```

###  数値の範囲制限（クランプ）

```javascript
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}
```

---

## ✅ 注意点と補足

- `Math.random()` は**真の乱数ではなく擬似乱数**です。
- 三角関数や `atan2` の角度単位は**度ではなくラジアン**。
- `Math.pow(x, y)` は ES2016 以降 `x ** y` に書き換えると簡潔。
- `Math.log10()` や `Math.log2()` は IE では未サポート。

---

## ✅ まとめ

`Math` オブジェクトは、あらゆる数学的ニーズに対応できる汎用的なツールです。開発者は乱数生成、角度変換、統計的処理、描画アルゴリズムなど様々な場面で活用できます。

