# 649. Dota2 Senate

In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the `two rights`:

`Ban one senator's right`: A senator can make another senator lose all his rights in this and all the following rounds.

`Announce the victory`: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.

Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".

## Sample Case

Example 1:

```plaintext
Input: senate = "RD"
Output: "Radiant"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
```

Example 2:

```plaintext
Input: senate = "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
```

## Note

> Solution

To do the Recursion for senate and execute the method

1. Ban one senator's right
2. Announce the victory

\* if we want to run the second method, that mean we need to check last senate every time.

\* check next senate identity to decide execute the method or not.

\* Need to run until all senate has no rights, or on side announce victory

sample senate: `RDRDDDR`

`Round 1`

* currentSenate: [R]DRDDDR
* right 1: Ban one senator's right
* right 2: ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  OXOOOOO // has rights
  ```

`Round 2`

* currentSenate: R[D]RDDDR // has no rights ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  OXOOOOO // has rights
  ```

`Round 3`

* currentSenate: RD[R]DDDR
* right 1: Ban one senator's right
* right 2: ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  OXOXOOO // has rights
  ```

`Round 4`

* currentSenate: RDR[D]DDR // has no rights ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  OXOXOOO // has rights
  ```

`Round 5`

* currentSenate: RDRD[D]DR
* right 1: Ban one senator's right
* right 2: ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  OXOXOOX // has rights
  ```

`Round 5`

* currentSenate: RDRDD[D]R
* right 1: Ban one senator's right
* right 2: ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  XXOXOOX // has rights
  ```

`Round 6`

* currentSenate: RDRDDD[R] // has no rights ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  XXOXOOX // has rights
  ```

`Round 7`

* currentSenate: RD[R]DDDR
* right 1: Ban one senator's right
* right 2: ❌

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  XXOXXOX // has rights
  ```

`Round 8`

* currentSenate: RDRDD[D]R
* right 1: Ban one senator's right
* right 2: ✅ no one has rights any more.

  ```plaintext
  /* senator rights */
  RDRDDDR // senate
  XXXXXOX // has rights
  ```

### Solution Code (bad performance)

```javascript
const senateAry = senate.split("");
  let banD = 0;
  let banR = 0;
  let currentIndex = 0;
  let result = "";
  let round = 0;

  while (senateAry.length > 0) {
    console.log(`senate round ${round}: `, senateAry);

    if (new Set(senateAry).size === 1) {
      result = senateAry[0];
      break;
    }
    const role = senateAry.shift();

    if (banD > 0 && role === "D") {
      banD -= 1;
      continue;
    }

    if (banR > 0 && role === "R") {
      banR -= 1;
      continue;
    }

    if (role === "D") {
      banR += 1;
    }
    if (role === "R") {
      banD += 1;
    }

    senateAry.push(role);
  }

  console.log("result", result);
  return senateResult[result];
```



> Time complexity

> Edge Case
