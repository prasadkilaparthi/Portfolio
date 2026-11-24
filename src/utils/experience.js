/**
 * Calculates live experience starting from April 2023.
 * Automatically updates when month or year changes.
 */
export const calculateExperience = (startDate = new Date(2023, 3, 1)) => {
  const now = new Date();
  
  // Total months elapsed inclusive of active month
  const totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth()) +
    1;

  const validMonths = Math.max(totalMonths, 0);
  const years = Math.floor(validMonths / 12);
  const remainingMonths = validMonths % 12;

  const formatted = `${years}.${remainingMonths}+`;
  const textYears = `${formatted} Years`;

  return {
    years,
    months: remainingMonths,
    totalMonths: validMonths,
    formatted,
    textYears,
  };
};

export const liveExperience = calculateExperience();
export default calculateExperience;
