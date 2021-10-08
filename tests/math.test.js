import { log } from "../renderer/lib/math";

// Log
test("log(10,10)", () => {
  expect(log(10, 10)).toBe(1);
});
test("log(0)", () => {
  expect(log(0)).toBe(Infinity);
});
test("log(10, 2)", () => {
  expect(parseFloat(log(10, 2).toFixed(6))).toBe(3.321928);
});
test("log(10, e)", () => {
  expect(parseFloat(log(27, Math.E).toFixed(6))).toBe(3.295837);
});
