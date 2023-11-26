import React from "react";
import Chart from "react-apexcharts";
import { data1 } from "../data/glData";
import { getRevenuesData, getDataByMasrof, getDataByEiradName, getDataByMasrofName } from "../js/calcBalance.js"

const ApexChart = (props) => {
  const data = data1.value;

  const subtractArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      throw new Error("Array lengths must be equal");
    }
    return arr1.map((value, index) => value - arr2[index]);
  };
  const dataAll = [
    {
      id: 1,
      name: getDataByEiradName(data, props.year),
      type: "column",
      data: getRevenuesData(data, props.year),
    },
    {
      id: 2,
      name: getDataByMasrofName(data, props.year),
      type: "column",
      data: getDataByMasrof(data, props.year),
    },
  ];

  const allData = [
    ...dataAll,
    {
      name: "صافي الربح",
      type: "column",
      data: subtractArrays(
        getRevenuesData(data, props.year),
        getDataByMasrof(data, props.year)
      ),
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
