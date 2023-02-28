const removeOuterParenthesesTest = require("../removeOutermostParentheses");

test("(()())(()) returns ()()()", ()=>{
    expect(removeOuterParenthesesTest.removeOuterParentheses('(()())(())')).toBe('()()()');
})