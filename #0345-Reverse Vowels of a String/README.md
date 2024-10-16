# Reverse Vowels of a String

Given a string s, `reverse only all the vowels` in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

## Sample Case

Example 1:

```plaintext
Input: s = "IceCreAm"
Output: "AceCreIm"
```

Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

```plaintext
Input: s = "leetcode"
Output: "leotcede"
```

## Note

> 解題方向

先跑一回圈整理出 vowels 及 result 兩個陣列
然後跑第二個迴圈將 vowels 字母反向依序塞回 result

First, run a loop to organize the vowels and result arrays.
Then, run a second loop to reverse the vowels and insert them back into the result array in order.

```plaintext
original: [I,c,e,C,r,e,A,m]
result: [?,c,?,C,r,?,?,m]
vowels: [I,e,e,A]
```

insert vowels into result:

result index 0:

```plaintext
vowels: [I,e,e,A] pop "A"
result: [A,c,?,C,r,?,?,m]
```

result index 2:

```plaintext
vowels: [I,e,e] pop "e"
result: [A,c,e,C,r,?,?,m]
```

result index 5:

```plaintext
vowels: [I,e] pop "e"
result: [A,c,e,C,r,e,?,m]
```

result index 6:

```plaintext
vowels: [I] pop "I"
result: [A,c,e,C,r,e,I,m]
```

> 時間複雜度

這樣的時間複雜度  O(n) + O(n) = O(n)

> Edge Case


## Others

Some interesting solutions from the [leetcode](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3646561/the-shortest-solution/?envType=study-plan-v2&envId=leetcode-75)
