const wordEqualsSumationTest = require("../wordEqualsSummation");


test("acb, cba, cdb should return true", ()=>{
    expect(wordEqualsSumationTest.isSumEqual("acb","cba", "cdb")).toBe(true);
})

test("acc, cba, cdb should return false", ()=>{
    expect(wordEqualsSumationTest.isSumEqual("acc","cba", "cdb")).toBe(false);
})

test("null, cba, cdb should return false", ()=>{
    expect(wordEqualsSumationTest.isSumEqual(null,"cba", "cdb")).toBe(false);
})

test("undefined, cba, cdb should return false", ()=>{
    expect(wordEqualsSumationTest.isSumEqual(undefined,"cba", "cdb")).toBe(false);
})

test("1, cba, cdb should return false", ()=>{
    expect(wordEqualsSumationTest.isSumEqual(1,"cba", "cdb")).toBe(false);
})