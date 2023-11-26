import { signal } from "@preact/signals-react";

const data = [
  {
    year_id: 2023,
    nameE: "الايرادات",
    nameM: "المصروفات",
    type: "column",
    dataE: [300, 500, 3000, 6000, 6000, 7000, 9000, 10000, 9000, 11000, 1200, 13000].sort((a, b) => b - a), //.sort((a, b) => b - a),
    dataM: [30, 4000, 2000, 500, 400, 4000, 6000, 8000, 9000, 600, 1000, 1000].sort((a, b) => b - a),
  },
  {
    year_id: 2019,
    nameE: "الايرادات",
    nameM: "المصروفات",
    type: "column",
    dataE: [4, 3, 4, 7, 7, 7, 9, 10, 9, 11, 12, 20].sort((a, b) => b - a), //.sort((a, b) => b - a),
    dataM: [3, 4, 2, 5, 4, 4, 6, 8, 9, 6, 1, 10].sort((a, b) => b - a),
  },
  {
    year_id: 2020,
    nameE: "الايرادات",
    nameM: "المصروفات",
    type: "column",
    dataE: [4, 4, 9, 7, 9, 7, 9, 10, 9, 11, 11, 10].sort((a, b) => b - a), //.sort((a, b) => b - a),
    dataM: [3, 4, 5, 1, 4, 2, 6, 8, 9, 6, 5, 10].sort((a, b) => b - a),
  },
  {
    year_id: 2021,
    nameE: "الايرادات",
    nameM: "المصروفات",
    type: "column",
    dataE: [4, 3, 15, 7, 15, 7, 9, 10, 9, 11, 12, 20].sort((a, b) => b - a), //.sort((a, b) => b - a),
    dataM: [3, 4, 6, 5, 3, 4, 6, 8, 1, 6, 2, 10].sort((a, b) => b - a),
  },
  {
    year_id: 2022,
    nameE: "الايرادات",
    nameM: "المصروفات",
    type: "column",
    dataE: [4, 5, 4, 16, 8, 9, 9, 10, 9, 11, 12, 20].sort((a, b) => b - a), //.sort((a, b) => b - a),
    dataM: [3, 2, 2, 1, 4, 4, 6, 8, 9, 6, 10, 10].sort((a, b) => b - a),
  },
  {
    year_id: 2018,
    nameE: "الايرادات",
    nameM: "المصروفات",
    type: "column",
    dataE: [4, 3, 4, 2, 11, 10, 8, 15, 3, 15, 18, 19].sort((a, b) => b - a), //.sort((a, b) => b - a),
    dataM: [3, 4, 2, 1, 4, 4, 6, 8, 3, 6, 1, 10].sort((a, b) => b - a),
  },
];

export const data1 = signal(data);
