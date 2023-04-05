// 1. reverse string
const string = "this is javascript";
const reverseStr = (str) => str.split(" ").reverse().join(" ");

// 2. remove vowel in string
const vowelStr = "hello  come to the point";
const removeVowel = (str) => str.replace(/[aeiou]/g, "");

// 4. remove all symbols in string
const remove = (s) => s.replace(/[!()'"]/g, "").concat("!");

// 5. Number to String
const numberToString = (num) => num.toString();

// 6.String to Number
const stringToNumber = (str) => parseInt(str);

// 7. Remove First and Last Character
const removeChar = (str) => str.slice(1, -1);
const removeChar2 = (str) => str.substring(1, str.length - 1);
