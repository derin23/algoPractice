const longestCommonPrefixTest = require("../longestCommonPrefix");

test(' ["flower","flow","flight"] should return "fl"', () => { 
    expect(longestCommonPrefixTest.longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
 })