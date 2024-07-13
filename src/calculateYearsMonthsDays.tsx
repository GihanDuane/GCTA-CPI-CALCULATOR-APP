// Utility function to calculate years, months, and days from total days
const calculateYearsMonthsDays = (
  totalDays: number | null
): { years: number | null; months: number | null; days: number | null } => {
  if (totalDays === null || totalDays === 0) {
    return { years: null, months: null, days: null };
  }

  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = (totalDays % 365) % 30;

  return { years, months, days };
};

export default calculateYearsMonthsDays;
