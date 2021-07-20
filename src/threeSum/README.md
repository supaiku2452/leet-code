# 3sum

普通にfor文をネストするとパフォーマンスが悪いので、two pointer techniqueを利用する

今回は3値(x,y,z)を使うため、xを固定して、y =
z間が適用区間になる。for文で回す場合はポインターを一つずつしか進められないが、この場合はsumが0の時にleft/rightの双方を進めることが出来るためメモリの使用効率が良くなる。実際に、テストコードの4つめの実行時間だとかなりの差が出る

以下が実行結果

|  pattern  |  time  |
| ---- | ---- |
|  two pointer technique  |  347ms  |
|  nested for  |  5 min 29sec  |

## 参考

https://leetcode.com/articles/two-pointer-technique/
