const { collectMeasurements } = require('./collect_measurements');

describe('Day 1', () => {
  it('should return 3 increased measurements', () => {
    // Given
    const arr = [299, 301, 302, 303, 200];
    // When
    const measurements = collectMeasurements(arr);
    // Then
    expect(measurements).toBe(3)
  });

  it('should return 1 increased measurement', () => {
    // Given
    const arr = [299, 303, 302, 301, 300];
    // When
    const measurements = collectMeasurements(arr);
    // Then
    expect(measurements).toBe(1)
  });

  it('should return 0 increased measurement with empty array', () => {
    // Given
    const arr = [];
    // When
    const measurements = collectMeasurements(arr);
    // Then
    expect(measurements).toBe(0)
  });

  it('should return 0 increased measurement with null or undefined', () => {
    expect(collectMeasurements(null)).toBe(0);
    expect(collectMeasurements(undefined)).toBe(0)
  });
});
