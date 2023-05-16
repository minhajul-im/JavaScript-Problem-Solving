// 350 Intersection of Two Array ||

var intersect = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return;

  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        arr.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return arr;
};

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
