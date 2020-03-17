const mergeTwoLists = require("./index");

test("input: [1,2,4],[1,3,4] should be return [1,1,2,3,4,4]", () => {
  const L1 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  };

  const L2 = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  };

  const result = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 4
            }
          }
        }
      }
    }
  };

  expect(mergeTwoLists(L1, L2)).toMatchObject(result);
});
