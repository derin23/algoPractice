const filter_list_test = require("../listFiltering")

test("tests only numbers are returned", () => {
    expect(filter_list_test(["a","n",1,2,3])).toEqual([1,2,3]);
})

test("test that checks result when no number is passed in", () => {
    expect(filter_list_test(["a","b","c"]).toEqual("no numbers in array!"));
})

test("test what happens if an empty array is passed in", () =>{
    expect(filter_list_test([]).toBe("no numbers in array!"));
})
