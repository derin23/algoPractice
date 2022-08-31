const camelCaseTest = require("../breakCamelCase");

test("happy path", () => {
    expect(camelCaseTest.solution('camelCasing')).toBe('camel Casing');
});

// test("Testing long happy path",() =>{
//     expect(camelCaseTest('camelCasingTest')).toBe('camel Casing Test');
// });