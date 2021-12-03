const {
  collectMeasurements,
  collectMeasurementsSlidingWindow,
} = require("./collect_measurements");
const fs = require("fs");

const data = fs.readFileSync(__dirname + "/../../inputs/day1.txt", {
  encoding: "utf8",
  flag: "r",
});
const exArray = data.split("\n").map((input) => parseInt(input));

describe("Day 1", () => {
  it("should return 1564 increased measurements", () => {
    // When
    const measurements = collectMeasurements(exArray);
    // Then
    expect(measurements).toBe(1564);
  });

  it("should return 7 increased measurements", () => {
    // Given
    const arr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    // When
    const measurements = collectMeasurements(arr);
    // Then
    expect(measurements).toBe(7);
  });

  it("should return 1 increased measurement", () => {
    // Given
    const arr = [299, 303, 302, 301, 300];
    // When
    const measurements = collectMeasurements(arr);
    // Then
    expect(measurements).toBe(1);
  });

  it("should return 0 increased measurement with empty array", () => {
    // Given
    const arr = [];
    // When
    const measurements = collectMeasurements(arr);
    // Then
    expect(measurements).toBe(0);
  });

  it("should return 0 increased measurement with null or undefined", () => {
    expect(collectMeasurements(null)).toBe(0);
    expect(collectMeasurements(undefined)).toBe(0);
  });

  it("should return 5 increased measurement with three-measurement sliding window", () => {
    // Given
    const arr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    // When
    const measurements = collectMeasurementsSlidingWindow(arr);
    // Then
    expect(measurements).toBe(5);
  });

  it("should return 0 increased measurement with three-measurement sliding window with null or undefined", () => {
    expect(collectMeasurements(null)).toBe(0);
    expect(collectMeasurements(undefined)).toBe(0);
  });

  it("should return 1611 increased measurement with three-measurement sliding window with input", () => {
    const measurements = collectMeasurementsSlidingWindow(exArray);
    // Then
    expect(measurements).toBe(1611);
  });
});
