const firstNonRepeatingCharacterTest = require("../firstNonRepeatingCharacter");


test("should return 1",()=>{
    expect(firstNonRepeatingCharacterTest.firstNonRepeatingCharacter("abcdcaf")).toBe(1);
})

test("should return -1",()=>{
    expect(firstNonRepeatingCharacterTest.firstNonRepeatingCharacter("abcabc")).toBe(-1);
})