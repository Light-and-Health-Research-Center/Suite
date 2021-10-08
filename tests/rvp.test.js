import {
  pupilRadius,
  retinalIlluminance,
  thresholdContrast,
  halfSaturationConstant,
  maximumResponse,
  performance,
  reactionTime,
  visibilityLevel,
  relativeVisualPerformance,
} from "../renderer/lib/rvp";

test("pupilRadius(10.0)", () => {
  expect(pupilRadius(10.0)).toBe(2.0303820877640786);
});

test("retinalIlluminance(40, 2.0303820877640786, 10)", () => {
  expect(retinalIlluminance(40, 2.0303820877640786, 10)).toBe(
    85.47701648059201
  );
});

test("thresholdContrast(40, 4.8, 85.47701648059201)", () => {
  expect(thresholdContrast(40, 4.8, 85.47701648059201)).toBe(
    0.04803075941579906
  );
});

test("halfSaturationConstant(4.8, 85.47701648059201)", () => {
  expect(halfSaturationConstant(4.8, 85.47701648059201)).toBe(
    0.06756603156611679
  );
});

test("maximumResponse(85.47701648059201)", () => {
  expect(maximumResponse(85.47701648059201)).toBe(0.003078642473578327);
});

test("performance(0.9, 0.003078642473578327, 0.04803075941579906, 0.06756603156611679)", () => {
  expect(
    performance(
      0.9,
      0.003078642473578327,
      0.04803075941579906,
      0.06756603156611679
    )
  ).toBe(0.002835966666089029);
});

test("reactionTime(0.002835966666089029)", () => {
  expect(reactionTime(0.002835966666089029)).toBe(352.6134534504459);
});

test("visibilityLevel(0.9, 0.04803075941579906)", () => {
  expect(visibilityLevel(0.9, 0.04803075941579906)).toBe(18.737992297993053);
});

test("relativeVisualPerformance(352.6134534504459)", () => {
  expect(relativeVisualPerformance(352.6134534504459)).toBe(0.9668689042086653);
});
