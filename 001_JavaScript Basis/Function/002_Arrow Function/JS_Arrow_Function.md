# アロー関数（Arrow Function）ガイド

## ✅概要
アロー関数は、JavaScriptのES6（ECMAScript 2015）で導入された関数の短縮表記です。従来の関数式と比べて簡潔な構文を持ち、**レキシカルな`this`の束縛**が特徴です。

---

## ✅基本構文

### 従来の関数
```javascript
const add = function(a, b) {
  return a + b;
};
```

### アロー関数
```javascript
const add = (a, b) => a + b;
```

### 主な違い
| 構文要素          | アロー関数での表記          |
|-------------------|---------------------------|
| `function` キーワード | 省略可能（`=>`を使用）     |
| `return` 文       | 単一行の場合は省略可能      |
| ブロック `{}`     | 複数行の処理が必要な場合に必要 |

---

## ✅レキシカルな `this` の束縛

### 特徴
アロー関数は自身の `this` を持たず、**親スコープの `this` を継承**します。これはイベントリスナーやコールバック関数で特に有用です。

### 例: 従来の関数 vs アロー関数
```javascript
const obj = {
  value: 42,
  method: function() {
    setTimeout(function() {
      console.log(this.value); // undefined（thisはグローバルオブジェクト）
    }, 100);
  }
};

// アロー関数版
const objArrow = {
  value: 42,
  method: function() {
    setTimeout(() => {
      console.log(this.value); // 42（thisは親スコープのobjArrow）
    }, 100);
  }
};
```

---

## ✅アロー関数の制約

### 1. コンストラクターとして使用不可
```javascript
const Foo = () => {}; 
const foo = new Foo(); // TypeError: Foo is not a constructor
```

### 2. `arguments` オブジェクトにアクセス不可
代わりにスプレッド構文を使用：
```javascript
const args = (...args) => console.log(args);
args(1, 2, 3); // [1, 2, 3]
```

### 3. `prototype` プロパティを持たない
```javascript
const Foo = () => {};
console.log(Foo.prototype); // undefined
```

### 4. `super` や `new.target` が使えない
クラスメソッドやコンストラクター内では注意が必要です。

---

## ✅適切な使用例

### 1. コールバック関数
```javascript
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

### 2. シンプルな関数式
```javascript
const square = x => x ** 2;
```

### 3. `this` を保持する必要がある処理
```javascript
document.addEventListener('click', () => {
  console.log('Clicked!', this); // thisは親スコープのthis
});
```

---

## ✅使用しない方が良いケース

### 1. オブジェクトのメソッド
```javascript
const obj = {
  value: 42,
  method: () => console.log(this.value) // NG（thisはwindowやundefined）
};
obj.method(); // undefined
```

### 2. コンストラクター関数
```javascript
const Person = (name) => { this.name = name; };
const p = new Person("Alice"); // TypeError
```

### 3. `arguments` オブジェクトが必要な関数
```javascript
const logArgs = () => console.log(arguments); // ReferenceError
```

---

## ✅サンプルコード集

### 単一行の戻り値
```javascript
const greet = name => `Hello, ${name}!`;
```

### ブロック構文
```javascript
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

### フィルター処理
```javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0); // [2, 4]
```

---

## ✅まとめ

| 特徴               | アロー関数 | 従来の関数 |
|--------------------|------------|------------|
| `this` のレキシカル束縛 | ✅         | ❌         |
| コンストラクター可否     | ❌         | ✅         |
| `arguments` オブジェクト | ❌         | ✅         |
| 簡潔な構文            | ✅         | ❌         |

---

## ✅参考リンク
- [MDN Web Docs: アロー関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ES6の新機能: アロー関数](https://es6-features.org/#ArrowFunctions)

