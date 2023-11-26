// import React from "react";
import ReactApexChart from "react-apexcharts";
import { data1 } from "../data/glData";
import "../assets/fonts/font.css";
import { getRevenuesData, getDataByMasrof, sumArrays } from "../js/calcBalance.js";

function PieChart(props) {
  const data = data1.value;

  const dataE = sumArrays(getRevenuesData(data, props.year));
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
          // width: 200,
          // },

          legend: {
            position: "bottom",
          }
        },
      },
    ],
  };

  // 

  return (
    <div style={{ fontFamily: "cairo" }} >
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">حركة المصروفات والإيرادات</h4>
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="pie"
            // width={400}
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export { PieChart };
