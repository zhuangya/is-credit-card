var isCredit = require("./index");

describe("isCreditCard", function () {
  it("should return true when the credit card is valid", function () {
    expect(isCredit("4816549819447220")).toBe(true);
  });
  it("should return false when the credit card is invalid", function () {
    expect(isCredit("1111111111111111")).toBe(false);
  });
});
