// 203. Remove Linked List Elements
//linked list
var removeElements = function (head, val) {
  let node = new ListNode(-1, head);

  if (head) {
    let cur = node;

    while (cur.next) {
      // delete node
      if (cur.next.val === val) {
        cur.next = cur.next?.next;
      } else {
        cur = cur.next;
      }
    }
  }

  return node.next;
};

// recursion
var removeElements = function (head, val) {
  if (!head) return null;

  if (head.val == val) {
    return removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
    return head;
  }
};
