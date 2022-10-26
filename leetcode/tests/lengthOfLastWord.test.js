const lengthOfLastWordTest = require('../lengthOfLastWord');

test('"hello world" should return 5',() =>  {
    expect(lengthOfLastWordTest.lengthOfLastWord("hello world")).toBe(5);
});

test('"hello hi ho" should return 2',() =>  {
    expect(lengthOfLastWordTest.lengthOfLastWord("hello hi ho")).toBe(2);
});

test('"lets go formation" should return 9',() =>  {
    expect(lengthOfLastWordTest.lengthOfLastWord("lets go formation")).toBe(9);
});

test('"lets go formation  " should return 9',() =>  {
    expect(lengthOfLastWordTest.lengthOfLastWord("lets go formation  ")).toBe(9);
});

test('"a" should return 1',() =>  {
    expect(lengthOfLastWordTest.lengthOfLastWord("a")).toBe(1);
});