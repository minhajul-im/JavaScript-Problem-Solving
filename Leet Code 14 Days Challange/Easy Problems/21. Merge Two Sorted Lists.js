// 21. Merge Two Sorted Lists

var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
let list1 = [1, 2, 4],
  list2 = [1, 3, 4];

/// why not work

var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  let node = new ListNode(0);

  let xNode = node;

  while (list1 || list2) {
    if (list1 || (!list2 && list1.val <= list2.val)) {
      xNode.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      xNode.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    xNode = xNode.next;
  }

  return node.next;
};
