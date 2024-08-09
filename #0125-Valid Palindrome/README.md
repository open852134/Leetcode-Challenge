# \#125 Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

## Description

Example 1:

```plain
Input: "A man, a plan, a canal: Panama"
Output: true
```

Example 2:

```plain
Input: "race a car"
Output: false
```

## Note

大致流程：

- Step1: 基本檢查，如果 input 為空直或是長度小於 2 時，可以提早 return 結果
- Step2: 將所有 Input 轉成小寫
- Step3: 剔除英數字以外的字元
- Step4: 將 Input 字串轉成 Array 然後透過 JS 原生的 Array reverse 做反向後檢查

另外一種方式是透過迴圈分別從左右兩邊開始比對字元是否一樣
