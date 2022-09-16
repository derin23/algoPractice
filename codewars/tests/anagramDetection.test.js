const isAnagramTest = require("../anagramDetection");

test("happy path test", () =>{
    expect(isAnagramTest.isAnagram("foefet", "toffee")).toBe(true);
})