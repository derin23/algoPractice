const simplePigLatinTest = require("../simplePigLatin");

test('Pig latin is cool should return igPay atinlay siay oolcay', () => { 
    expect(simplePigLatinTest.pigIt.pigIt("Pig latin is cool")).toBe("gPay atinlay siay oolcay");
})