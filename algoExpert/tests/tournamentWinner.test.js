const tournamentWinnerTest = require("../tournamentWinner");

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ];
let results = [0,0,1];
test("should return Python",()=>{
    expect(tournamentWinnerTest.tournamentWinner(competitions,results)).toBe("Python");
})
