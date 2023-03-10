const rotateStringTest = require("../rotateStrings");

test(`("abcde","bcdea") returns true`,()=>{{
    expect(rotateStringTest.rotateString("abcde","bcdea")).toBe(true);
}})

test(`("abcde","a") returns false`,()=>{{
    expect(rotateStringTest.rotateString("abcde","a")).toBe(false);
}})