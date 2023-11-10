import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { fromMonth, toMonth, z } from "./Period";
import { period } from "./Period";
// import { log } from "console";
// import { count } from "./Period";

const LineChart = () => {
  // const [data, setData] = useState(null);
  const [assetsData, setAssetsData] = useState([]);
  const [liabilitiesData, setLiabilitiesData] = useState([]);

  const url = "https://localhost:7222/api/BalanceSheet";

  axios.get(url).then((response) => {
    // console.log(response.data);
  });

  useEffect(
    () => {
      axios
        .get(url)
        .then((response) => {
          const assetsData = [];
          const liabilitiesData = [];

          // strat forEach
          response.data.forEach((i) => {
            if (i.year === 2023 && i.month) {
              // assets
              if (i.type === 1) {
                // for (let per = fromMonth.value; per <= toMonth.value; per++) {
                assetsData.push({ x: i.month, y: Math.abs(i.amount) });
                // console.log(per);
                // while (per === i.month) {
                // assetsData.push({ x: per, y: Math.abs(i.amount) });
                // }
              }
            }

            // liabilities
            if (i.type === 2) {
              liabilitiesData.push({ x: i.month, y: Math.abs(i.amount) });
            }
          });
          // end forEach

          // strat forEach
          // let lastData = [{}];
          // period.forEach((i) => {
          //   lastData.push({ x: i });
          // });

          // response.data.forEach((j) => {
          //   if (j.year === 2023 && j.month) {
          //     if (j.type === 1) {
          //       console.log("j.month: " + j.month + " j.year: " + j.year);
          //     }
          //   }
          // });
          console.log(assetsData);

          // end forEach

          // setAssetsData(assetsData);
          // setLiabilitiesData(liabilitiesData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    [
      /*z.value*/
    ]
  );

  const assetsData2 = [
    { x: 100, y: 150 },
    { x: 2100, y: 150 },
  ];
  const liabilitiesData2 = [
    { x: 600, y: 150 },
    { x: 5100, y: 150 },
  ];

  const chartOptions = {
    // onclick: increment(),
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
