const createDictTest = require("../dictionaryFromTwoLists");


test("should return {'a': 1, 'b': 2, 'c': 3, 'd': null}", ()=>{
    expect(createDictTest.createDict(['a', 'b', 'c', 'd'],[1, 2, 3])).toEqual({'a': 1, 'b': 2, 'c': 3, 'd': null})
})