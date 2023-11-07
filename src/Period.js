import { signal } from "@preact/signals-react";
import { func } from "prop-types";
// import { count } from "console";

export const fromMonth = signal(0);
export const toMonth = signal(0);
export const Year = signal(0);
export let period = [];
export const j = signal(period);
export let count = signal(0);

export function monthSeries() {
  period = [];
  for (let i = fromMonth.value; i <= toMonth.value; i++) {
    period.push(i);
  }
  // console.log(period);
  count.value++;
}
// export function incrementCount() {
//   count2++;
// }

// export function calculateMonthDifference(fromMonth, fromYear, toMonth, toYear) {
//   const startDate = new Date(`${fromYear}-${fromMonth}-01`);
//   const endDate = new Date(`${toYear}-${toMonth}-01`);

//   const monthsApart =
//     (endDate.getFullYear() - startDate.getFullYear()) * 12 +
//     endDate.getMonth() -
//     startDate.getMonth();

//   return monthsApart;
// }
export function calculateMonthDifference(Year, fromMonth, toMonth) {
  const startDate = new Date(`${Year}-${fromMonth}-01`);
  const endDate = new Date(`${Year}-${toMonth}-01`);

  const monthsApart =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    endDate.getMonth() -
    startDate.getMonth() +
    1;

  return monthsApart;
}

export const z = signal(0);
export function updateZ() {
  z.value++;
}
