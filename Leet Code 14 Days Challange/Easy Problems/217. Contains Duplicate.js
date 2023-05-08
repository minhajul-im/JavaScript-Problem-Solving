var containsDuplicate = function (nums) {
  let newSetSize = new Set([...nums]).size;
  return !(nums.length === newSetSize);
};
