const isAnagramTest = require("../anagramDetection");

test("happy path test", () =>{
    expect(isAnagramTest.isAnagram("foefet", "toffee")).toBe(true);
})

test("sad path test", () =>{
    expect(isAnagramTest.isAnagram("ound", "round")).toBe(false);
})

test("'Twoo', 'WooT' returns true", () =>{
    expect(isAnagramTest.isAnagram("Twoo", "WooT")).toBe(true);
})
