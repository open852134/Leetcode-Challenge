# 238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

## Sample Case

Example 1:

```plaintext
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

Example 2:

```plaintext
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

## Note

> 解題方向

先不考慮 O(n) 這件事，最基礎的做法應該就是跑 n^2 的迴圈去計算會像是這樣

```javascript
const result = nums.reduce((accumulator, currentValue, currentIndex, array) => {
  const answer = [...nums.slice(0, currentIndex), ...nums.slice(currentIndex + 1)].reduce(
    (accumulator, currentValue) => {
      return accumulator * currentValue;
    },
    1
  );

  return [...accumulator, answer === -0 ? Math.abs(answer) : answer];
}, []);

return result;
```

將數組分成左右兩邊進行計算乘積計算，同時先初始化一個 answer 都為 1 的陣列

譬如數組 originalNums [1,2,3,4]，要宣告一個 answer [1,1,1,1] 陣列，接著要計算每個數字左側的數列乘積總合，所以要有一個變數來存放前一次成績總和是多少 prefix。

- 當遍歷 index 0:

```plain
answer[0] = prefix
prefix = originalNums[0] * prefix

answer[0] = 1
prefix = 1 * 1 = 1

answer = [1,1,1,1]
```

- 當遍歷 index 1:

```plain
answer[1] = prefix
prefix = originalNums[1] * prefix

answer[1] = 1
prefix = 2 * 1 = 2

answer = [1,1,1,1]
```

- 當遍歷 index 2:

```plain
answer[2] = prefix
prefix = originalNums[1] * prefix

answer[2] = 2
prefix = 3 * 2 = 6

answer = [1,1,2,1]
```

- 當遍歷 index 3:

```plain
answer[3] = prefix
prefix = originalNums[1] * prefix

answer[3] = 6
prefix = 4 * 6 = 24

answer = [1,1,2,6]
```

接下來換從右邊開去計算，此時 answer [1,1,2,6]，originalNums [1,2,3,4]，右側的 suffix 初始 = 1

- 當遍歷 index 3:

```plain
answer[i] = answer[i] * suffix
suffix = originalNums[1] * suffix

answer[3] = 6 * 1
suffix = 4 * 1 = 4

answer = [1,1,2,6]
```

- 當遍歷 index 2:

```plain
answer[i] = answer[i] * suffix
suffix = originalNums[1] * suffix

answer[2] = 2 * 4 = 8
suffix = 3 * 4 = 12

answer = [1,1,8,6]
```

- 當遍歷 index 1:

```plain
answer[i] = answer[i] * suffix
suffix = originalNums[1] * suffix

answer[1] = 1 * 12 = 12
suffix = 2 * 12 = 24

answer = [1,12,8,6]
```

- 當遍歷 index 0:

```plain
answer[i] = answer[i] * suffix
suffix = originalNums[1] * suffix

answer[0] = 1 * 24 = 24
suffix = 1 * 24 = 24

answer = [24,12,8,6]
```

> 時間複雜度 O(n)

> Edge Case
