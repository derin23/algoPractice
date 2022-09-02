const extractDomainTest = require('../extractTheDomainNameFromAURL');

test('"http.king.com" should return king',() => {
    expect(extractDomainTest.domainName('http.king.com')).toBe('king');
})

test('"https.prince.com" should return prince',() => {
    expect(extractDomainTest.domainName('https.prince.com')).toBe('prince');
})

test('"https.www.queen.com" should return queen',() => {
    expect(extractDomainTest.domainName('https.www.queen.com')).toBe('queen');
})

test('"http://github.com/carbonfive/raygun"" should return github',() => {
    expect(extractDomainTest.domainName('http://github.com/carbonfive/raygun')).toBe('github');
})

test('"" should return "check input"', () => {
    expect(extractDomainTest.domainName("")).toBe('check input');
})

test('null should return "check input', () => {
    expect(extractDomainTest.domainName(null)).toBe('check input');
})

test('undefined should return "check input', () => {
    expect(extractDomainTest.domainName(undefined)).toBe('check input');
})