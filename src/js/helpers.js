import dayjs from "dayjs";
import 'dayjs/locale/ar'


// Accepts month number and returns month
export function getMonthName(monthNumber) {
  return dayjs()
    .month(monthNumber - 1)
    .locale("ar")
    .format("MMMM");
}
