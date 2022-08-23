const splitStringsTest = require("../splitString");

test("testing normal happy path", () =>{
    expect(splitStringsTest("abcd")).toBe(["ab","cd"]);
})

test("testing odd number of inputs happy path", () => {
    expect(splitStringsTest("abc")).toBe(["ab","c_"]);
})