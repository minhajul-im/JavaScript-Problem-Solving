/**
 * Problem - 2
ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
তি নটি property থাকবে ।
Task:
1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
দি য়ে replace হবে । (২য় output এর format এ )
Input Output
{street:10,house:“15A”,society:“Earth
Perfect”}
10,15A,Earth Perfect
{street:10,society:“Earth Perfect”} 10,__,Earth Perfect
{street:10} 10,_,_
Function definition:
function findAddress(obj) {
}
 */

const findAddress = (address) => {
  // destructure
  const { street, house, society } = address;

  if (street && house && society) {
    return `${street}, ${house}, ${society}!`;
  } else {
    // just use only ternary operator
    return `${street ? street : "__"}, ${house ? house : "__"},
     ${society ? society : "__"}!`;
  }
};

const address = { street: "", house: "", society: "Earth Perfect" };
console.log(findAddress(address));
