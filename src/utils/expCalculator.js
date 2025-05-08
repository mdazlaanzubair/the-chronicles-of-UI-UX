export default function calculateYearCount() {
  const targetDate = new Date("2023-04-12");
  const yearDifference =
    (new Date() - targetDate) / (1000 * 60 * 60 * 24 * 365.25); // Dividing by the average number of milliseconds in a year
  return yearDifference.toFixed(1);
}
