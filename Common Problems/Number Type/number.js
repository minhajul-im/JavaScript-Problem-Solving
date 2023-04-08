//1. this is called number
const number = 1971;

// 2 Generate Random Number in Max & Min
const randomNumber = (max, min) => {
  const rand = Math.trunc(Math.random() * (max - min) + min);
  return rand;
};
