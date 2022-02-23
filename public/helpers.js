// Return today's date as a string
export function getCurDateString() {
  return getDateString(new Date())
}

// Give date string as 'day-month-year' from 'Date' object instance
export function getDateString(dateObj) {
  return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`
}