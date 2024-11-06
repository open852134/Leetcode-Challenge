# 1456. Maximum Number of Vowels in a Substring of Given Length

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

## Sample Case

Example 1:

```plaintext
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
```

Example 2:

```plaintext
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
```

Example 3:

```plaintext
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
```

## Note

> Solution

abciiidef, k=3

跟之前計算總和的題目類似，先組合第一組資料，然後計算 numbers of vowels
然後依序往後組合去加減 vowels 數量，紀錄最多 vowels 的組合回傳

第一組

```plaintext
currentCombination：abc
result：1
```

第二組

```plaintext
currentCombination：abc
remove fist letter, check is vowel: bc
result: 0

add new letter, check is vowel: bci
result: 1
currentCombination：bci
```

第三組

```plaintext
currentCombination：bci
remove fist letter [b], check is vowel: ci
result: 1

add new letter [i], check is vowel: cii
result: 1 + 1 = 2
currentCombination：cii
```

> Time complexity

O(n)

> Edge Case

全部都字串都是 vowels 或是都不是，可能可以先跑個 `.every()` 檢查
