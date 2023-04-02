// 1. reverse string 
const string = 'this is javascript'
const reverseStr = (str) => str.split(' ').reverse().join(' ');

// 2. remove vowel in string 
const vowelStr = 'hello  come to the point';
const removeVowel =  (str) => str.replace(/[aeiou]/g, '');

// 4. remove all symbols in string
const remove = s => s.replace(/[!()'"]/g, '').concat('!');
