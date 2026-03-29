export interface WordNorm {
  ageMonths: number;
  p10: number;
  p25: number;
  p50: number;
  p75: number;
  p90: number;
}

export const wordNorms: WordNorm[] = [
  { ageMonths: 8, p10: 0, p25: 0, p50: 0, p75: 2, p90: 5 },
  { ageMonths: 10, p10: 0, p25: 1, p50: 2, p75: 6, p90: 12 },
  { ageMonths: 12, p10: 2, p25: 3, p50: 6, p75: 14, p90: 28 },
  { ageMonths: 14, p10: 3, p25: 8, p50: 16, p75: 36, p90: 65 },
  { ageMonths: 16, p10: 7, p25: 18, p50: 40, p75: 75, p90: 120 },
  { ageMonths: 18, p10: 12, p25: 28, p50: 65, p75: 120, p90: 190 },
  { ageMonths: 20, p10: 22, p25: 50, p50: 105, p75: 185, p90: 275 },
  { ageMonths: 22, p10: 40, p25: 80, p50: 155, p75: 250, p90: 350 },
  { ageMonths: 24, p10: 60, p25: 115, p50: 210, p75: 325, p90: 425 },
  { ageMonths: 26, p10: 85, p25: 160, p50: 275, p75: 400, p90: 500 },
  { ageMonths: 28, p10: 115, p25: 205, p50: 340, p75: 460, p90: 550 },
  { ageMonths: 30, p10: 150, p25: 255, p50: 400, p75: 520, p90: 600 },
];

/**
 * Returns the closest WordNorm entry for a given age in months.
 * Returns null if the age is outside the normed range (below 8 or above 30 months).
 */
export function getNormForAge(ageMonths: number): WordNorm | null {
  if (ageMonths < 8 || ageMonths > 30) return null;

  let closest = wordNorms[0];
  let smallestDiff = Math.abs(ageMonths - closest.ageMonths);

  for (const norm of wordNorms) {
    const diff = Math.abs(ageMonths - norm.ageMonths);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closest = norm;
    }
  }

  return closest;
}
