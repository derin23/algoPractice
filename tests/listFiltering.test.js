const filter_list_test = require("../codewars/listFiltering.js")

test("tests only numbers are returned", () => {
    expect(filter_list_test(["a","n",1,2,3])).toBe([1,2,3]);
})

test("test that checks result when no number is passed in", () => {
    expect(filter_list_test(["a","b","c"]).toBe([]));
})