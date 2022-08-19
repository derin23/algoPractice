const switcherooTest = require("../switcheroo");

test("testing happy path", () => {
    expect(switcherooTest("bca")).toBe("acb");
})