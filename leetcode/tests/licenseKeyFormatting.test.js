const licenseKeyFormattingTest = require("../licenseKeyFormatting");

test("5F3Z-2e-9-w, 4 returns 5F3Z-2E9W", ()=>{
    expect(licenseKeyFormattingTest.licenseKeyFormatting("5F3Z-2e-9-w",4)).toBe("5F3Z-2E9W");
})


test("Z-2e-9-w, 4 returns Z-2E9W", ()=>{
    expect(licenseKeyFormattingTest.licenseKeyFormatting("Z-2e-9-w",4)).toBe("Z-2E9W");
})

test("-, 4 returns '' ", ()=>{
    expect(licenseKeyFormattingTest.licenseKeyFormatting("-",4)).toBe("");
})

test("a, 4 returns 'A' ", ()=>{
    expect(licenseKeyFormattingTest.licenseKeyFormatting("a",4)).toBe("A");
})