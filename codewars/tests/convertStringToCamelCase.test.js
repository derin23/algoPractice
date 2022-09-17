const convertStringToCamelCaseTest = require("../convertStringToCamelCase");

test("some-thing returns someThing", () =>{
    expect(convertStringToCamelCaseTest.toCamelCase("some-thing")).toBe("someThing");
})

test("'' returns ''", () =>{
    expect(convertStringToCamelCaseTest.toCamelCase("")).toBe("");
})

test("some_thing returns ", () =>{
    expect(convertStringToCamelCaseTest.toCamelCase("some_thing")).toBe("someThing");
})