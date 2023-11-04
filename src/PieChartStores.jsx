// import React from "react";
import ReactApexChart from "react-apexcharts";

function PieChart(props) {
  const series = [60000, 40000, 20000];
  const options = {
    chart: {
      // width: 480,
      type: "pie",
    },
    labels: ["  الوارد  " ,"  المنصرف  " ," الرصيد الحالي  " ],
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
                <h4 className="card-title">حركة  {props.name}  </h4>
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

export default PieChart;
