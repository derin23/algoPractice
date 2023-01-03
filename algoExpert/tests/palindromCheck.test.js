const palindromeCheckTest = require("../palindromCheck");

test('aba should return true', () => { 
    expect(palindromeCheckTest.isPalindrome("aba")).toBe(true);
})
test('abc should return false', () => { 
    expect(palindromeCheckTest.isPalindrome("abc")).toBe(false);
})

test('aba should return true', () => { 
    expect(palindromeCheckTest.isPalindrome1("aba")).toBe(true);
})
test('abc should return false', () => { 
    expect(palindromeCheckTest.isPalindrome1("abc")).toBe(false);
})

test('aba should return true', () => { 
    expect(palindromeCheckTest.isPalindromeOptimal("aba")).toBe(true);
})
test('abc should return false', () => { 
    expect(palindromeCheckTest.isPalindromeOptimal("abc")).toBe(false);
})

test('aba should return true', () => { 
    expect(palindromeCheckTest.isPalindromeOptimal1("aba")).toBe(true);
})
test('abc should return false', () => { 
    expect(palindromeCheckTest.isPalindromeOptimal1("abc")).toBe(false);
})

