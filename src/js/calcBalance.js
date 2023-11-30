import { signal } from "@preact/signals-react";

// --------------- For ChartMonth & PieChart--------------------

// Returns an array of month's revenues balance
const getRevenuesData = (propData, id) => {
  const object = propData.find((item) => item.year_id === id);
  if (object) {
    return object.dataE.sort((a, b) => b - a);
  }
};

// Returns an array of month's expenses balance
const getExpensesData = (propData, id) => {
  const object = propData.find((item) => item.year_id === id);
  if (object) {
    return object.dataM.sort((a, b) => b - a);
  }
};

// Calculate the total balance (the summation of the array elements)
const sumArrays = (arr) => {
  if (arr) {
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  } else return [];
};
const subtractArrays = (arr1, arr2) => {
  if (arr1 && arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Array lengths must be equal");
    }
    return arr1.map((value, index) => value - arr2[index]);
  } else return [];
};
//------------------ For ChartMonth -----------------
const getDataByEiradName = (propData, id) => {
  const name = propData.find((item) => item.year_id === id);
  return name ? name.nameE : "";
};

const getDataByMasrofName = (propData, id) => {
  const name = propData.find((item) => item.year_id === id);
  return name ? name.nameM : "";
};

const expensesData = signal([]);
const revenuesData = signal([]);

export {
  getRevenuesData,
  getExpensesData,
  sumArrays,
  subtractArrays,
  getDataByEiradName,
  getDataByMasrofName,
  expensesData,
  revenuesData,
};
