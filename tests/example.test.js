const { calculateFinalAmount } = require("../src/pricing");

test("calculates final amount without coupon", () => {
  const result = calculateFinalAmount(500);
  expect(result).toBe(500);
});

test("applies 5% discount for subtotal >= 1000", () => {
  const result = calculateFinalAmount(1000);
  expect(result).toBe(950);
});

test("applies SAVE10 coupon with 10% discount", () => {
  const result = calculateFinalAmount(500, "SAVE10");
  expect(result).toBe(450);
});

test("caps SAVE10 discount at 100", () => {
  const result = calculateFinalAmount(2000, "SAVE10");
  expect(result).toBe(1800);
});

test("applies FLAT50 coupon", () => {
  const result = calculateFinalAmount(500, "FLAT50");
  expect(result).toBe(450);
});

test("prevents negative amount with FLAT50", () => {
  const result = calculateFinalAmount(30, "FLAT50");
  expect(result).toBe(0);
});

test("throws error for negative subtotal", () => {
  expect(() => calculateFinalAmount(-100)).toThrow("Invalid subtotal");
});

test("accepts coupon in any case", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(450);
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
});
