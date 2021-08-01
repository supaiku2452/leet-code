# Roman to Integer

ローマ字を数値に変換する[問題](https://leetcode.com/problems/roman-to-integer/)

ローマ数字は以下の法則がある。
 
> - I can be placed before V (5) and X (10) to make 4 and 9. 
> - X can be placed before L (50) and C (100) to make 40 and 90. 
> - C can be placed before D (500) and M (1000) to make 400 and 900.

また、数値の並び順は左から順に値が小さくなっていく。

今回は並び順の特性を利用すると、基本ロジックは以下の通りシンプルになる

```typescript
for (let i = 0; i < ary.length - 1; i++) {
  const [left, right] = [
    getSafetyRomanNum(ary[i]),
    getSafetyRomanNum(ary[i + 1]),
  ];
  if (left < right) sum -= left;
  else sum += left;
}
sum += getSafetyRomanNum(ary[ary.length - 1]);
```

