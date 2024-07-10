// src/utils/dateUtils.ts

export const convertDaysToYMD = (days: number) => {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = (days % 365) % 30;

  return { years, months, days: remainingDays };
};
