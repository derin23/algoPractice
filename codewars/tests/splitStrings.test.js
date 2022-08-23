const splitStringsTest = require("../splitString");

test("testing normal happy path", () =>{
    expect(splitStringsTest("abcd")).toBe(["ab","cd"]);
})