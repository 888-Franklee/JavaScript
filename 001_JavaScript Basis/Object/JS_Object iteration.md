
# JavaScriptにおけるオブジェクトの反復（イテレーション）

JavaScriptでは、オブジェクトの**プロパティ（キーと値）を効率よく処理**するために、複数の反復手段が提供されています。
このガイドでは、さまざまな方法を例付きで詳細に解説します。

---
## 1.`for...in` ループ

`for...in` は、オブジェクトの**列挙可能なすべてのプロパティのキー**を取得します。

```javascript
const user = {
  name: "田中",
  age: 30,
  isMember: true
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}
```

 ⚠️ 注意：`for...in` は継承されたプロパティも含めます。

###  `hasOwnProperty()` との併用

```javascript
for (let key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(key, user[key]);
  }
}
```

---

## 2. `Object.keys()` + `forEach`

`Object.keys(obj)` は、自身が持つ**キーの配列**を返します。

```javascript
Object.keys(user).forEach(key => {
  console.log(key + ": " + user[key]);
});
```

---

## 3. `Object.values()`

`Object.values(obj)` は、オブジェクトの**すべての値の配列**を返します。

```javascript
const values = Object.values(user);
console.log(values); // ["田中", 30, true]
```

---

## 4. `Object.entries()` + `for...of`

`Object.entries(obj)` は `[キー, 値]` の配列を返すため、`for...of` と非常に相性が良いです。

```javascript
for (const [key, value] of Object.entries(user)) {
  console.log(`${key} => ${value}`);
}
```

---

## 5. 配列の中のオブジェクトに対する `forEach()`

```javascript
const users = [
  { name: "田中", age: 30 },
  { name: "佐藤", age: 25 }
];

users.forEach(user => {
  console.log(user.name + " は " + user.age + "歳です");
});
```

---

## 6. `for...of` はオブジェクト単体には使えない

```javascript
const obj = { a: 1, b: 2 };
// ❌ TypeError: obj is not iterable
for (const item of obj) {
  console.log(item);
}
```

 iterable にしたい場合は `Object.entries()` 等を使用：

```javascript
for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
```

---

## 7. `hasOwnProperty()` を使った安全な反復

継承されたプロパティをスキップすることで、意図しないバグを防げます。

```javascript
for (let key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    console.log(key);
  }
}
```

---

## 8. 応用：ネストされたオブジェクトの反復

```javascript
const product = {
  title: "ノートパソコン",
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD"
  }
};

for (const [key, value] of Object.entries(product.specs)) {
  console.log(key + ": " + value);
}
```

---

##  9. 方法の比較と選び方

| 方法                    | 特徴                                               | 使用場面                      |
|-------------------------|----------------------------------------------------|-------------------------------|
| `for...in`              | すべての列挙可能プロパティ                         | 古典的な方法、注意が必要      |
| `Object.keys()`         | キーのみ、継承プロパティなし                       | 一般的なキー列挙              |
| `Object.values()`       | 値のみ、シンプルな出力                             | 値の処理に集中したいとき      |
| `Object.entries()`      | キーと値の両方、最も柔軟                           | ループでキーと値を使いたい    |
| `forEach()` + 配列      | 配列内オブジェクト処理に便利                       | 多数のオブジェクトを反復処理  |

---

## 10. 結論

JavaScriptでは、オブジェクトを反復処理するために多彩な選択肢があります。
**目的やデータ構造に応じて最適な方法を選択することが重要です。**
コードの可読性と安全性を高めるために、`Object.entries()` + `for...of` や `Object.keys()` + `forEach` の活用が特におすすめです。
