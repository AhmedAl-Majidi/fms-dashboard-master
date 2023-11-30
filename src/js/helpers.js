import dayjs from "dayjs";

// Accepts month number and returns month
export function getMonthName(monthNumber) {
  return dayjs()
    .month(monthNumber - 1)
    .locale("ar")
    .format("MMMM");
}
