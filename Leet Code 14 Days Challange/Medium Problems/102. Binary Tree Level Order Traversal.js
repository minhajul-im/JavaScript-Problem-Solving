// 102. Binary Tree Level Order Traversal

// breadth fast search solution

var levelOrder = function (root) {
  if (!root) return [];

  let queue = [root],
    result = [];

  while (queue.length) {
    let levelArr = [];

    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let temp = queue.shift();

      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }

      levelArr.push(temp.val);
    }

    result.push(levelArr);
  }

  return result;
};

/// recursive solution
var levelOrder = function (root) {
  let result = [],
    count = 0;

  return level(root, count, result);
};

function level(root, count, result) {
  if (!root) return result;

  if (!result[count]) {
    result[count] = [root.val];
  } else {
    result[count].push(root.val);
  }

  result = level(root.left, count + 1, result);
  result = level(root.right, count + 1, result);

  return result;
}
