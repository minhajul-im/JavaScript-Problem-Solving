// 83. Remove Duplicates from Sorted List
var deleteDuplicates = function (head) {
  if (!head) return head;

  let data = head;

  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return data;
};
