// https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 || l2 || carry) {
    const x = l1.val ?? 0;
    const y = l2.val ?? 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummyHead.next;
};

// Example usage:
const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465
const result = addTwoNumbers(l1, l2); // Should return a linked list representing 807
let current = result;
while (current) {
  console.log(current.val); // Output: 7 -> 0 -> 8
  current = current.next;
}
