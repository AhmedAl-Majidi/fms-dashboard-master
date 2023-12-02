import React from "react";
import Chart from "react-apexcharts";
import { ApiData } from "../data/glData";
import {
  getDataByEiradName,
  getDataByMasrofName,
  expensesData,
  revenuesData,
  profitsData,
} from "../js/calcBalance.js";

const ApexChart = (props) => {
  const data = ApiData.value;

  const dataAll = [
    {
      id: 1,
      name: getDataByEiradName(data, props.year),
      type: "column",
      data: revenuesData.value,
    },
    {
      id: 2,
      name: getDataByMasrofName(data, props.year),
      type: "column",
      data: expensesData.value,
    },
  ];

  const allData = [
    {
      id: 1,
      name: getDataByEiradName(data, props.year),
      type: "column",
      data: revenuesData.value,
    },
    {
      id: 2,
      name: getDataByMasrofName(data, props.year),
      type: "column",
      data: expensesData.value,
    },
    {
      name: "صافي الربح",
      type: "column",
      data: profitsData.value,
    },
  ];

  const options = {
    series: allData,
    chart: {
      height: 368,
      type: "bar",
      stacked: false,
    },

    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    xaxis: {
      categories: [
        "ديسمبر",
        "نوفمبر",
        "اكتوبر",
        "سبتمبر",
        "اغسطس",
        "يوليو",
        "يونيو",
        "مايو",
        "ابريل",
        "مارس",
        "فبراير",
        "يناير",
      ].sort((a, b) => b - a),
    },
    yaxis: [
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft",
        offsetY: 30,
        offsetX: 60,
      },
    },
  };

  return (
    <div className="card">
      <div className="card-body">
        <Chart
          options={options}
          series={options.series}
          type={options.chart.type}
          height={options.chart.height}
        />
      </div>
    </div>
  );
};

export default ApexChart;
