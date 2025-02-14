# 2095. Delete the Middle Node of a Linked List

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

## Sample Case

## Note

> Solution

1. 需要知道這個 List 有多長，才有辦法定義出 middle value 是哪一個 Index
2. 透過迴圈 loop 每一個節點，找到要刪除的 index
3. 移除節點: 就是將前一個 Node.next 直接指向到下一個 Node 即可

> Time complexity

O(n)

> Edge Case
