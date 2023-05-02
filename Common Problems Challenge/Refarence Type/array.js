// 1. problem delete array property two factor
const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
  { id: 6, value: 60 },
  { id: 7, value: 70 },
];
const index = arr.findIndex((item) => item.id === 3);
// mutable
const arr1 = arr.splice(index, 1);
// console.log(arr1);
// console.log(arr);
// immutable
const arr2 = arr.filter((item) => item.id !== 5);
// console.log(arr2);
// console.log(arr);
