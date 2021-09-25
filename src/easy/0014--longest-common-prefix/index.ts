// arrayの中でマッチするprefixを返す
// 存在しない場合は空文字を返す

// 制限
// 配列の長さは1以上、200以下
// 文字の長さは、0文字以上、200文字以下

export const longestCommonPrefix = (strs: string[]) => {
  // 0文字が配列に含まれていたら空文字を返す
  const target = new Array(...strs);
  if (target.includes("")) return "";
  let s = target.shift()!;
  let result = s.length;
  let hasNextWord = target.length > 0;
  while (hasNextWord) {
    let current = target.shift()!;
    let right = current.split("");
    let matchedIndex = 0;
    let compareMaxLength =
      s.length > current.length ? current.length : s.length;
    let i = 0;
    while (i < compareMaxLength) {
      if (!(s[i] && right[i])) {
        i = Number.MAX_SAFE_INTEGER;
      } else {
        if (s[i] === right[i]) {
          ++matchedIndex;
        } else {
          i = Number.MAX_SAFE_INTEGER;
        }
      }
      i++;
    }
    result = result > matchedIndex ? matchedIndex : result;
    hasNextWord = target.length > 0;
  }

  return strs[0].substr(0, result);
};
