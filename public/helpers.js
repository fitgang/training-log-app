export function getCurrentDate() {

  // Return today's date string as 'day-month-year'
  const dateObj = new Date();
  return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`
}