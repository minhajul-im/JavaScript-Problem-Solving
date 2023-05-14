// 700. Search in a Binary Search Tree

var searchBST = function (root, val) {
  if (!root) return null;

  while (true) {
    if (root.val === val) {
      return root;
    } else if (root.val < val) {
      if (!root.right) return null;
      root = root.right;
    } else {
      if (!root.left) return null;
      root = root.left;
    }
  }
};
