# 1207. Unique Number of Occurrences

Given an array of integers `arr`, return `true` if the number of occurrences of each value in the array is unique or `false` otherwise.

## Sample Case

Example 1:

```plaintext
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
```

Example 2:

```plaintext
Input: arr = [1,2]
Output: false
```

Example 3:

```plaintext
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
```

## Note

> Solution

[1,2,2,1,1,3] result `true`

如何在只跑一次回圈後記算 number of occurrences 是否有一樣的

1. 一定要跑完一次回圈才有辦法知道 number of occurrences，透過 Object 紀錄各個數字的出現次數
2. 透過宣告一個 Set 然後比對長度看是否一樣

> Time complexity

> Edge Case