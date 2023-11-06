// import React from "react";
import ReactApexChart from "react-apexcharts";

function PieChart() {
  const series = [60000, 40000, 20000];
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
                />
              </div>
            </div>
          </div>
        </div>
      );
    
}

export {PieChart,PieChartBoxes};
