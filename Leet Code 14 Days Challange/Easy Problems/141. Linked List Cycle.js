// 141. Linked List Cycle
var hasCycle = function (head) {
  if (!head) return false;

  let fast = head,
    slow = head;

  while (fast) {
    slow = slow.next;
    // fast = fast.next?.next;
    fast = fast.next;

    if (fast) fast = fast.next;

    if (slow === fast) return true;
  }
  return false;
};
//141. Linked List Cycle
var hasCycle = function (head) {
  if (!head) return false;

  if (head.visited) return true;
  else {
    head.visited = true;
    return hasCycle(head.next);
  }
};
