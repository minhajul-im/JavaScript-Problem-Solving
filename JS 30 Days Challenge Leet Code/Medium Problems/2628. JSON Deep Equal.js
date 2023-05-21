// 2628. JSON Deep Equal

var areDeeplyEqual = function (o1, o2) {
  if (o1 === o2) return true;

  if (typeof o1 !== "object" || typeof o2 !== "object") return false;

  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  const keysOne = Object.keys(o1);
  const keysTwo = Object.keys(o2);

  if (keysOne.length !== keysTwo.length) return false;

  for (const key of keysOne) {
    if (!keysTwo.includes(key) || !areDeeplyEqual(o1[key], o2[key]))
      return false;
  }

  return true;
};

let o1 = { x: 1, y: 2 },
  o2 = { x: 1, y: 2 };

console.log(areDeeplyEqual(o1, o2));
