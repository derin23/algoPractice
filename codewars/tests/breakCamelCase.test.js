const camelCaseTest = require("../breakCamelCase");

test("happy path", () => {
    expect(camelCaseTest.solution('camelCasing')).toBe('camel Casing');
});

test("Testing long happy path",() =>{
    expect(camelCaseTest.solution('camelCasingTest')).toBe('camel Casing Test');
});

test("Testing empty string",() =>{
    expect(camelCaseTest.solution('')).toBe('');
});

test("Testing undefined",() =>{
    expect(camelCaseTest.solution(undefined)).toBe("input is not correct");
});

test("Testing null",() =>{
    expect(camelCaseTest.solution(null)).toBe("input is not correct");
});

