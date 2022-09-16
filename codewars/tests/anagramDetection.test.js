const isAnagramTest = require("../anagramDetection");

test("happy path test", () =>{
    expect(isAnagramTest.isAnagram("foefet", "toffee")).returnsTrue(true);
})