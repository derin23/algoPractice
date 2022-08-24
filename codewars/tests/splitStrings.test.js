const splitStringsTest = require("../splitStrings");

test("testing normal happy path", () =>{
    expect(splitStringsTest("abcd")).toStrictEqual(["ab","cd"]);
})

test("testing odd number of inputs happy path", () => {
    expect(splitStringsTest("abc")).toStrictEqual(["ab","c_"]);
})

test("testing empty string", () => {
    expect(splitStringsTest("")).toBe("check input parameter");
})

test("testing null", () => {
    expect(splitStringsTest(null)).toBe("check input parameter");
})

test("testing undefined", () => {
    expect(splitStringsTest(undefined)).toBe("check input parameter");
})