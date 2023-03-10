const dailyTemperaturesTest = require("../dailyTemp");

test("[73,74,75,71,69,72,76,73] returns [1,1,4,2,1,1,0,0]",()=>{
    expect(dailyTemperaturesTest.dailyTemperatures([73,74,75,71,69,72,76,73])).toEqual([1,1,4,2,1,1,0,0]);
})