## \#0002 Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

輸入會是兩個不為空且皆為正整數的陣列 (linked lists)，且第一個數字不為 0，除非陣列本身就為[0]

## Sample

Example 1:

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

Example 2:

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

## Note

這個寫法在 leetcode 上執行會是錯誤的，但看結果沒有問題
在想應該是透過這種方式對 reference 做指向的時候造成的錯誤

```javascript
_head.next = node;
head = node;
```
