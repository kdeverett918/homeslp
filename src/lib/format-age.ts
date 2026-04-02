function formatFriendlyAge(months: number) {
  if (months === 0) return "birth";
  if (months < 24) return `${months} mo`;

  const years = months / 12;
  const rounded = Number.isInteger(years) ? years.toFixed(0) : years.toFixed(1);
  return `${rounded} yr`;
}

export function formatFriendlyAgeRange(startMonths: number, endMonths: number) {
  return `${formatFriendlyAge(startMonths)}-${formatFriendlyAge(endMonths)}`;
}
