import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const LineChart = () => {
  // const [data, setData] = useState(null);
  const [assetsData, setAssetsData] = useState([]);
  const [liabilitiesData, setLiabilitiesData] = useState([]);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const url = "https://localhost:7222/api/BalanceSheet";

    axios
      .get(url)
      .then((response) => {
        // setData(response.data);

        const assetsData = [];
        const liabilitiesData = [];

        response.data.forEach((i) => {
          if (i.year === 2023 && i.month) {
            // assets
            if (i.type === 1) {
              assetsData.push({ x: i.month, y: Math.abs(i.amount) });
            }

            // liabilities
            if (i.type === 2) {
              liabilitiesData.push({ x: i.month, y: Math.abs(i.amount) });
            }
          }
        });

        setAssetsData(assetsData);
        setLiabilitiesData(liabilitiesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Configuration options for the chart
  const chartOptions = {
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: assetsData.map((dataPoint) => dataPoint.x),
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={[
        { name: "الاصول", data: assetsData.map((dataPoint) => dataPoint.y) },
        {
          name: "الخصوم",
          data: liabilitiesData.map((dataPoint) => dataPoint.y),
        },
      ]}
      type="line"
      // width="500"
    />
  );
};

export default LineChart;
