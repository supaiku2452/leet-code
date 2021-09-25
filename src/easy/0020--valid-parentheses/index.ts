// bracketは以下3種
// (),[],{}
// 文字数は、1以上10000以下

const pairs = ["()", "{}", "[]"];
function isValid(s: string): boolean {
  return hasBracket(s);
}

function hasBracket(s: string): boolean {
  if (s.length === 0) return true;
  if (pairs.reduce((p, c) => s.includes(c) || p, false)) {
    const replaced = pairs.reduce(
      (p, c) => (s.includes(c) ? s.replace(c, "") : p),
      s
    );
    return replaced.length === 0 ? true : hasBracket(replaced);
  } else {
    return false;
  }
}

export { isValid };
