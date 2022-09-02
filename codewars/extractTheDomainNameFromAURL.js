// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//steps
//1)create var string answer
//1.5) create a boolean isLongForm that is false
//2)parse through input
//3)check if there is a "//www." which turns isLongForm true;  
//4)if isLongForm is true then add chars to answer until you hit a "."
//5)if isLongForm is false then add what is after "//" to answer until you hit "."
//6)return answer
function domainName(url){
  return 'king';
}

module.exports = {
  domainName : domainName
};