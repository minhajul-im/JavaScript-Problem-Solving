// 387. First Unique Character in a String

// hash table

var firstUniqChar = function (s) {
  let map = new Map();

  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (let char of s) {
    if (map.get(char) === 1) {
      return s.indexOf(char);
    }
  }

  return -1;
};

// built-in method.
var firstUniqCharB = function (s) {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

let s = "leetcode",
  x = "aabb";

console.log(firstUniqChar(s));
