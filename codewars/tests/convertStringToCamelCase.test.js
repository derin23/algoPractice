const convertStringToCamelCaseTest = require("../convertStringToCamelCase");

test("some-thing returns someThing", () =>{
    expect(convertStringToCamelCaseTest.toCamelCase("some-thing")).toBe("someThing");
})