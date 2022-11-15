const generateParenthesisTest = require('../generateParentheses');


test('expect 3 to return ["((()))","(()())","(())()","()(())","()()()"]', () => {
    expect(generateParenthesisTest.generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
})

test('expect 1 to return ["()"]', () => {
    expect(generateParenthesisTest.generateParenthesis(1)).toEqual(["()"]);
})
