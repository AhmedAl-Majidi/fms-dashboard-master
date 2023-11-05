import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

function PieChart() {
  const [data, setData] = useState(null);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const url = "https://localhost:7222/api/ExpensesAndRevenues";

    axios
      .get(url)
      .then((response) => {
        setData(response.data);

        // Check if data is an array and has at least one element
        if (Array.isArray(response.data) && response.data.length > 0) {
          setSeries([
            response.data[0].credit,
            response.data[0].debit,
            response.data[0].credit - response.data[0].debit,
          ]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means the effect runs once after the initial render

  const options = {
    chart: {
      type: "pie",
    },
    labels: ["الإيـــــــرادات ", "المصروفـــات", "صافي الربـــح"],
    responsive: [
      {
        breakpoint: 480,
        options: {
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
            <ReactApexChart options={options} series={series} type="pie" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
