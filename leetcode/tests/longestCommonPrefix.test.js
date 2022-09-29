const longestCommonPrefixTest = require("../longestCommonPrefix");
const longestCommonPrefixTest1 = require("../longestCommonPrefix1");

test(' ["flower","flow","flight"] should return "fl"', () => { 
    expect(longestCommonPrefixTest.longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
 })

 
test(' ["flower","flow","flight"] should return "fl"', () => { 
    expect(longestCommonPrefixTest1.longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
 })