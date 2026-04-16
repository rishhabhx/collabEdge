/**
 * CollabEdge DA3 — additional unit tests for math utility functions.
 * Tests cover: rangeIncludesValue, normalizeRadians, degreesToRadians,
 * radiansToDegrees, and rangeInclusiveFromPair.
 */

import { rangeInclusive, rangeIncludesValue, rangeInclusiveFromPair } from "../src/range";
import {
  normalizeRadians,
  degreesToRadians,
  radiansToDegrees,
  isRightAngleRads,
} from "../src/angle";

import type { Radians } from "../src/types";

// ---------------------------------------------------------------------------
// rangeIncludesValue
// ---------------------------------------------------------------------------
describe("rangeIncludesValue", () => {
  const range = rangeInclusive(0, 10);

  it("returns true when value is inside the range", () => {
    expect(rangeIncludesValue(5, range)).toBe(true);
  });

  it("returns true at the lower bound (inclusive)", () => {
    expect(rangeIncludesValue(0, range)).toBe(true);
  });

  it("returns true at the upper bound (inclusive)", () => {
    expect(rangeIncludesValue(10, range)).toBe(true);
  });

  it("returns false when value is below the lower bound", () => {
    expect(rangeIncludesValue(-1, range)).toBe(false);
  });

  it("returns false when value is above the upper bound", () => {
    expect(rangeIncludesValue(11, range)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// rangeInclusiveFromPair
// ---------------------------------------------------------------------------
describe("rangeInclusiveFromPair", () => {
  it("creates a range from a number pair identical to rangeInclusive", () => {
    const fromPair = rangeInclusiveFromPair([3, 7]);
    const direct = rangeInclusive(3, 7);
    expect(fromPair).toEqual(direct);
  });

  it("round-trips through rangeIncludesValue correctly", () => {
    const range = rangeInclusiveFromPair([2, 8]);
    expect(rangeIncludesValue(2, range)).toBe(true);
    expect(rangeIncludesValue(8, range)).toBe(true);
    expect(rangeIncludesValue(1, range)).toBe(false);
    expect(rangeIncludesValue(9, range)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// normalizeRadians
// ---------------------------------------------------------------------------
describe("normalizeRadians", () => {
  it("keeps a positive angle in [0, 2π) unchanged", () => {
    const angle = (Math.PI / 4) as Radians;
    expect(normalizeRadians(angle)).toBeCloseTo(Math.PI / 4);
  });

  it("converts a negative angle to its positive equivalent", () => {
    const neg = (-Math.PI / 2) as Radians;
    expect(normalizeRadians(neg)).toBeCloseTo((3 * Math.PI) / 2);
  });

  it("normalises 2π to 0", () => {
    const full = (2 * Math.PI) as Radians;
    expect(normalizeRadians(full)).toBeCloseTo(0);
  });

  it("normalises values greater than 2π", () => {
    const big = (3 * Math.PI) as Radians; // 540°
    expect(normalizeRadians(big)).toBeCloseTo(Math.PI);
  });
});

// ---------------------------------------------------------------------------
// degreesToRadians / radiansToDegrees
// ---------------------------------------------------------------------------
describe("degreesToRadians", () => {
  it("converts 0° to 0 rad", () => {
    expect(degreesToRadians(0 as never)).toBeCloseTo(0);
  });

  it("converts 90° to π/2 rad", () => {
    expect(degreesToRadians(90 as never)).toBeCloseTo(Math.PI / 2);
  });

  it("converts 180° to π rad", () => {
    expect(degreesToRadians(180 as never)).toBeCloseTo(Math.PI);
  });

  it("converts 360° to 2π rad", () => {
    expect(degreesToRadians(360 as never)).toBeCloseTo(2 * Math.PI);
  });
});

describe("radiansToDegrees", () => {
  it("converts 0 rad to 0°", () => {
    expect(radiansToDegrees(0 as Radians)).toBeCloseTo(0);
  });

  it("converts π/2 rad to 90°", () => {
    expect(radiansToDegrees((Math.PI / 2) as Radians)).toBeCloseTo(90);
  });

  it("converts π rad to 180°", () => {
    expect(radiansToDegrees(Math.PI as Radians)).toBeCloseTo(180);
  });

  it("round-trips degrees→radians→degrees", () => {
    const original = 45;
    const roundTripped = radiansToDegrees(degreesToRadians(original as never));
    expect(roundTripped).toBeCloseTo(original);
  });
});

// ---------------------------------------------------------------------------
// isRightAngleRads
// ---------------------------------------------------------------------------
describe("isRightAngleRads", () => {
  it("identifies π/2 as a right angle", () => {
    expect(isRightAngleRads((Math.PI / 2) as Radians)).toBe(true);
  });

  it("identifies 3π/2 as a right angle", () => {
    expect(isRightAngleRads(((3 * Math.PI) / 2) as Radians)).toBe(true);
  });

  it("returns false for non-right angles", () => {
    // π/4 = 45° → sin(π/2) = 1 → not a right-angle multiple
    expect(isRightAngleRads((Math.PI / 4) as Radians)).toBe(false);
    // π/3 = 60° → sin(2π/3) ≈ 0.866 → not a right-angle multiple
    expect(isRightAngleRads(((Math.PI) / 3) as Radians)).toBe(false);
  });
});
