import { signal } from "@preact/signals-react";

export const fromMonth = signal(0);
export const toMonth = signal(0);
export let period = [];
export const j = signal(period);
export let count = signal(0);

export function monthSeries() {
  period = [];
  for (let i = fromMonth.value; i <= toMonth.value; i++) {
    period.push(i);
  }
  count.value++;
}

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
