# 151. Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## Sample Case

Example 1:

```plaintext
Input: s = "the sky is blue"
Output: "blue is sky the"
```

Example 2:

```plaintext
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

Example 3:

```plaintext
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

## Note

> 解題方向

we can just use `split(' ')` to separate the input into words. This will give us a string array like `['a', 'good', '', '', 'example']`. After that, we can filter out the empty strings and run `reverse()` and use `join(' ')` to combine the result.

Or we can use `s.replace(/\s+/g, " ");` from the begin to trim the space.

> 時間複雜度

O(n)

> Edge Case
