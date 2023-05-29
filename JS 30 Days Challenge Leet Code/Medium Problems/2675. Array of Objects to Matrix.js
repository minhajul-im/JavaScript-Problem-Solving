// 2675. Array of Objects to Matrix

var jsonToMatrix = function (arr) {
  const map = new Map();
  const n = arr.length;

  for (let i = 0; i < n; ++i) {
    const el = arr[i];

    func(el, "", i);
  }

  const ans = [];

  for (let i = 0; i <= n; ++i) {
    ans[i] = [];
  }

  const sortedKeys = [...map.keys()].sort();

  for (let i = 0; i < map.size; ++i) {
    ans[0][i] = sortedKeys[i];
    const vals = map.get(sortedKeys[i]);

    for (let j = 1; j <= n; ++j) {
      ans[j][i] = vals[j - 1];
    }
  }

  return ans;

  function func(element, str, idx) {
    if (typeof element !== "object" || element === null) {
      if (!map.has(str)) map.set(str, new Array(n).fill(""));

      const prevVal = map.get(str);
      prevVal[idx] = element;

      return;
    }

    if (Array.isArray(element)) {
      const arrLen = element.length;

      for (let i = 0; i < arrLen; ++i) {
        func(element[i], `${str}${str !== "" ? "." : ""}${i}`, idx);
      }
    } else {
      for (const key of Object.keys(element)) {
        func(element[key], `${str}${str !== "" ? "." : ""}${key}`, idx);
      }
    }
  }
};
