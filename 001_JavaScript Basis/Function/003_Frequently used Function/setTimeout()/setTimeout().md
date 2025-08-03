# setTimeout()

### setTimeout() は、指定した時間が経過した後に一度だけ関数を実行するためのJavaScriptのメソッドです。非同期処理を扱う際に便利で、タイマーのような動作をします。

## 1.簡単なタイマー
```
setTimeout(() => {
  console.log('2秒後に表示されます');
}, 2000);
```
## 2.関数に引数を渡す
```
function greet(name) {
  console.log(`こんにちは、${name}さん！`);
}

setTimeout(greet, 3000, '太郎');
```
## 3.タイマーをキャンセルする
```
const timerId = setTimeout(() => {
  console.log('このメッセージは表示されません');
}, 5000);

clearTimeout(timerId);
console.log('タイマーがキャンセルされました');
```
## 4.ローディングメッセージ
```
console.log('ローディング中...');

setTimeout(() => {
  console.log('完了しました！');
}, 3000);
```

## 5.注意点
### setTimeout() は非同期関数です。タイマーの遅延時間がゼロでも、次のコードが先に実行されます。
```
console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
console.log('C');
```
### 遅延時間は正確ではありません。JavaScriptのイベントループやシステム負荷により、指定した時間よりも遅れる場合があります。
