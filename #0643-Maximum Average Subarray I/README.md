# #0643-Maximum Average Subarray I

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

## Sample Case

Example 1:

```plaintext
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

Example 2:

```plaintext
Input: nums = [5], k = 1
Output: 5.00000
```

## Note

> Solution

inputs: [1,12,-5,-6,50,3], k = 4 <br/>
長度為 4 所以會產生下面這幾種組合，然後個別計算平均值

- [1,12,-5,-6] = (1 + 12 + -5 + -6) / 4 => 2 / 4 = 0.5
- [12,-5,-6,50] = (12 + -5 + -6 + 50) / 4 => 51 / 4 = 12.75
- [-5,-6,50,3] = (-5 + -6 + 50 + 3) / 4 => 42 / 4 = 10.5

result = 12.75

每個數列計算總和時時間複雜度為 O(n)
如果有多組組合，每組都要計算總和時，時間複雜度是不是變成 O(n^2) 了 🤔

```javascript
let result = 0
let combinations = [
  [1,12,-5,-6],
  [12,-5,-6,50],
  [-5,-6,50,3]
]

const sum =(nums)=>{
  nums.reduce((acc,cur)=>{
    return acc + cur
  },0)
}
combinations.forEach((combination)=>{
  const sumTotal = sum(combination)
  if (sumTotal > result){
    result = sumTotal
  }
})
```

優化方向：

1. 取得需要算平均值數列的方式
2. 計算平均值的方式

總和等於 `前一組總和 + 下一組數字 - 前一個數組第一個數字`，所以以數列 [1,12,-5,-6,50,3]，k=4 來說：

- 第一組: 1  + 12 + (-5) + (-6) = 2
- 第二組: 2  -  1 + 50 = 51
- 第三組: 51 - 12 +  3 = 42

這樣計算總和時就不用每次都跑回圈處理了，時間複雜度就會降為 2 * O(n) = O(n)

1. 計算第一次總和
2. 計算其他組合總和

> Time complexity

O(n)
要先所有組合產生出來，最差情況就是 O(n)，然後再計算各置的平均值 O(n)

> Edge Case