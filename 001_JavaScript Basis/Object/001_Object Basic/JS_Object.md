
# JavaScriptのオブジェクトについての完全解説（日本語）

## 1. はじめに

JavaScriptのオブジェクト（Object）は、キーと値のペアで構成される非プリミティブなデータ型です。
すべての非プリミティブデータ（配列、関数、日付など）はオブジェクトです。

---

## 2. オブジェクトの作成方法

### 🔹 リテラル構文

```javascript
const person = {
  name: "田中",
  age: 28,
  isStudent: true
};
```

### 🔹 Objectコンストラクタ

```javascript
const obj = new Object();
obj.name = "田中";
obj.age = 28;
```

### 🔹 Object.create()

```javascript
const proto = { greet: () => console.log("こんにちは") };
const newObj = Object.create(proto);
newObj.name = "佐藤";
```

---

## 3. プロパティの操作

### プロパティの取得

```javascript
obj.name        // ドット記法
obj["name"]     // ブラケット記法
```

### プロパティの追加・更新・削除

```javascript
obj.gender = "male";          // 追加
obj.age = 30;                 // 更新
delete obj.isStudent;         // 削除
```

---

## 4. ループと反復処理

### for...in ループ

```javascript
for (let key in obj) {
  console.log(key, obj[key]);
}
```

### Objectメソッド

```javascript
Object.keys(obj);    // ["name", "age"]
Object.values(obj);  // ["田中", 28]
Object.entries(obj); // [["name", "田中"], ["age", 28]]
```

---

## 5. ネストされたオブジェクト

```javascript
const user = {
  name: "山本",
  address: {
    city: "大阪",
    zip: "530-0001"
  }
};

console.log(user.address.city); // "大阪"
```

---

## 6. メソッドとthis

```javascript
const car = {
  brand: "Toyota",
  showBrand() {
    console.log("ブランドは " + this.brand);
  }
};
car.showBrand(); // "ブランドは Toyota"
```

---

## 7. 組み込みオブジェクトメソッド

- `Object.keys(obj)`：キーの配列を返す
- `Object.values(obj)`：値の配列を返す
- `Object.entries(obj)`：キーと値のペア配列を返す
- `Object.assign(target, source)`：コピーやマージに使用
- `Object.hasOwn(obj, key)`：プロパティの所有をチェック
- `JSON.stringify(obj)`：JSON文字列に変換
- `JSON.parse(jsonStr)`：JSON文字列からオブジェクトに変換

---

## 8. スプレッド構文と分割代入

```javascript
const original = { a: 1, b: 2 };
const clone = { ...original }; // 浅いコピー

const { a, b } = original; // 分割代入
```

---

## 9. オブジェクトと配列の違い

| 比較項目     | オブジェクト               | 配列                     |
|--------------|----------------------------|--------------------------|
| キー         | 任意の文字列               | 数値インデックス         |
| 順序         | 保証されない               | 順序が保証される         |
| 適した用途   | 名前付きプロパティの管理   | リスト・順序付きコレクション |

---

## 10. イミュータブルなオブジェクトの作成

```javascript
const frozen = Object.freeze({ x: 1 });
frozen.x = 2; // 無視される（変更されない）
```

---

## 11. まとめ

JavaScriptのオブジェクトは非常に柔軟で、あらゆるデータ構造を表現できます。
この知識を活用して、より効率的で表現力のあるコードを書くことができます。
