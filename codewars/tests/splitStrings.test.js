const splitStringsTest = require("../splitStrings");

test("testing normal happy path", () =>{
    expect(splitStringsTest("abcd")).toStrictEqual(["ab","cd"]);
})

test("testing odd number of inputs happy path", () => {
    expect(splitStringsTest("abc")).toStrictEqual(["ab","c_"]);
})