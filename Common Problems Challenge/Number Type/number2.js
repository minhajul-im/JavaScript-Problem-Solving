// 1. max number generate
const max = (n1, n2, n3) => {
  return Math.max(n1, n2, n3);
};

console.log(max(100, 200, 150));

// 2. random number generate different system
const generateRand = (max, whatDoYouWant) => {
  // whatDoYouWant it's a function

  const r1 = Math.trunc(Math.random() * max);
  const r2 = Math.trunc(Math.random() * max);

  const result = whatDoYouWant(r1, r2);
  return result;
};

const a = generateRand(100, (r1, r2) => r1 + r2);
const b = generateRand(20, (a1, a2) => a1 - a2);
const c = generateRand(20, (a1, a2) => a1 * a2);
const d = generateRand(20, (a1, a2) => a1 / a2);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
