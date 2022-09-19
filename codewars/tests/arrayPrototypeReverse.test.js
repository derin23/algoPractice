const reverseTest = require("../arrayPrototypeReverse");

test("testing simple happy path", () => {
    expect(["a","b"].reverse()).toEqual(["b","a"]);
})

test("testing number array", () => {
    expect([1, 2, 3, 4].reverse()).toEqual([4,3,2,1]);
})

test("testing empty array", () => {
    expect([].reverse()).toEqual([]);
})