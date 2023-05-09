// 206. Reverse Linked List

// linked list
var reverseList = function (head) {
  let pre = null,
    post = null;

  while (head) {
    post = pre;
    pre = head;
    head = head.next;
    pre.next = post;
  }
  return pre;
};

// recursive
var reverseList = function (head, pre = null) {
  if (!head) return pre;

  const node = head.next;

  head.next = pre;

  return reverseList(node, head);
};
