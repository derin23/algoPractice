const arrayPrototypeLastTest = require("../arrayPrototypeLast");

test("[3] should return 3",()=>{
    expect(arrayPrototypeLastTest.last1([3])).toBe(3);
  })

  
test("[] should return -1",()=>{
  expect(arrayPrototypeLastTest.last1([])).toBe(-1);
})
