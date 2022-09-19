const reverseTest = require("../arrayPrototypeReverse");

test("testing if test returns reverse", () => {
    expect(["a","b"].reverse()).toBe(["b","a"]);
})