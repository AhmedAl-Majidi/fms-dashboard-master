// import React from "react";
import ReactApexChart from "react-apexcharts";
import { data1 } from "../data/ApiData";
import "../assets/fonts/font.css";

function PieChart(props) {
  const data = data1.value;
  const getDataByEirad = (propData, id) => {
    const object = propData.find((item) => item.year_id === id);
    return object ? object.dataE : [];
  };

  const getDataByMasrof = (propData, id) => {
    const object = propData.find((item) => item.year_id === id);
    return object ? object.dataM : [];
  };

  const sumArrays = (arr) => {
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  };

  const dataE = sumArrays(getDataByEirad(data, props.year));
  const dataM = sumArrays(getDataByMasrof(data, props.year));
  const dataSaf = dataE - dataM;
  const series = [dataE, dataM, dataSaf];
  const options = {
    chart: {
      // width: 480,
      type: "pie",
    },
    labels: ["الإيـــــــرادات ", "المصروفـــات", "صافي الربـــح"],

    responsive: [
      {
        breakpoint: 480,
        options: {
          // chart: {
          //   width: 200,
          // },

          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">حركة المصروفات والإيرادات</h4>
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="pie"
              // width={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PieChartBoxes() {
  const series = [60000, 40000, 20000];
  const options = {
    chart: {
      // width: 480,
      type: "pie",
    },
    labels: [" مــدين ", " دائــن ", " الــرصيد النهائي "],
    responsive: [
      {
        breakpoint: 480,
        options: {
          // chart: {
          //   width: 200,
          // },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">حــركة الصــناديق</h4>
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="pie"
              // width={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { PieChart, PieChartBoxes };
