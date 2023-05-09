// 206. Reverse Linked List
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
