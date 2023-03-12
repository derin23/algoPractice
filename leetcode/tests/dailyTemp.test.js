const dailyTemperaturesTest = require("../dailyTemp");

test("[73,74,75,71,69,72,76,73] returns [1,1,4,2,1,1,0,0]",()=>{
    expect(dailyTemperaturesTest.dailyTemperatures([73,74,75,71,69,72,76,73])).toEqual([1,1,4,2,1,1,0,0]);
})

test("[30,40,50,60] returns [1,1,1,0]",()=>{
    expect(dailyTemperaturesTest.dailyTemperatures([30,40,50,60] )).toEqual([1,1,1,0]);
})


test("[30] returns [0]",()=>{
    expect(dailyTemperaturesTest.dailyTemperatures([30])).toEqual([0]);
})
