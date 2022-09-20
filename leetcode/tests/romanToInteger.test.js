const romanToIntTest = require("../romanToInteger");

test("III should return 2", () => {
    expect(romanToIntTest.romanToInt("III")).toBe(3);
});

test("V should return 5", () => {
    expect(romanToIntTest.romanToInt("V")).toBe(5);
});

test("X should return 10", () => {
    expect(romanToIntTest.romanToInt("X")).toBe(10);
});

test("XL should return 40", () => {
    expect(romanToIntTest.romanToInt("XL")).toBe(40);
});

test("MCMXCIV should return 1994", () => {
    expect(romanToIntTest.romanToInt("MCMXCIV")).toBe(1994);
});
