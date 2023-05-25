const mergeTwoListsTest = require("../mergeTwoSortedLists");

let list1 = [1,2,4];
let list2 = [1,3,4];
let result = [1,1,2,3,4,4]
test("[1,2,4] and [1,3,4] should return [1,1,2,3,4,4]",()=>{
    expect(mergeTwoListsTest.mergeTwoLists(list1,list2)).toEqual(result);
})