export const calculateYearCount = (): string => {
  const targetDate: Date = new Date("01-11-2023");
  const yearDifference: number =
    (new Date().getTime() - targetDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25);
  return yearDifference.toFixed(1);
};
