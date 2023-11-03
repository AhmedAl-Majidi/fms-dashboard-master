import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const LineChart = () => {
  let assetsAllData = [];
  let liabilitiesAllData = [];
  const [data, setData] = useState(null);
  const [assetsData, setAssetsData] = useState([]);
  const [liabilitiesData, setLiabilitiesData] = useState([]);

  useEffect(() => {
    const url = "https://localhost:7237/api/AssetsLiabilities";

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        data.map((i) => {
          if (i.year === 2023 && i.month) {
            if (i.type === 1) {
              assetsAllData.push({ x: i.month, y: Math.abs(i.amount) });
            }

            if (i.type === 2) {
              liabilitiesAllData.push({ x: i.month, y: Math.abs(i.amount) });
            }
          }
        });
        setAssetsData(assetsAllData);
        setLiabilitiesData(liabilitiesAllData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(assetsData);
  console.log(liabilitiesData);

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
    />
  );
};

export default LineChart;
