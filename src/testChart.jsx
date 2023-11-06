import React from 'react';
import Chart from 'react-apexcharts';

const data = [
    {
        id:1,
        name: 'الايرادات',
        type: 'column',
        data: [3, 5, 3, 4, 4, 4, 6, 8].sort((a, b) => b - a),
    },
    {
        id:2,
        name: 'المصروفات',
        type: 'column',
        data: [1, 2, 2, 1, 2, 2, 3, 4].sort((a, b) => b - a),
    },
    
];
const getDataByName = (propData, id) => {
    const object = propData.find((item) => item.id === id);
    return object ? object.data : [];
}
// console.log(getDataByName(data,"Income"));
// console.log(getDataByName(data,"Cashflow"));

const subtractArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      throw new Error('Array lengths must be equal');
    }
    return arr1.map((value, index) => value - arr2[index]);
  };


  const allData = [...data,
{
    id:3,
    name: 'صافي الربح',
        type: 'column',
        data: subtractArrays(getDataByName(data,1),getDataByName(data,2)),
},
{
    id:4,
    name: 'التدرج السنوي',
    type: 'line',
    data: [6,6 ,6 ,4 , 5, 7, 7, 8].sort((a, b) => b - a),
}
]
// console.log(subtractArrays(getDataByName(data,1),getDataByName(data,2)));
console.log(subtractArrays(getDataByName(data,"Income"),getDataByName(data,"Cashflow")));
const ApexChart = () => {
    const options = {
        series: allData,
        chart: {
            height: 308,
            type: 'bar',
            stacked: false,
            events: {
                dataPointSelection: function (e, chart, opts) {
console.log( opts.w.globals.labels[opts.dataPointIndex]);
                }},
        },
        toolbar:{
            show:false,
        },
        dataLabels: {
              enabled: false,
        },
        stroke: {
            width: [1, 1, 4],
        },
        xaxis: {
            categories: [2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023].sort((a, b) => b - a),
        },
        yaxis: [
            {
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#008FFB',
                },
                labels: {
                    style: {
                        colors: '#008FFB',
                    },
                },
                // title: {
                //   text: 'Income (thousand crores)',
                //   style: {
                //     color: '#008FFB',
                //   },
                // },
                tooltip: {
                    enabled: true,
                },
            },
        
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft',
                offsetY: 30,
                offsetX: 60,
            },
        },
        // legend: {
        //     horizontalAlign: 'left',
        //     offsetX: 40,
        // },
    };

    return (
        <Chart
            options={options}
            series={options.series}
            type={options.chart.type}
            height={options.chart.height}
        />
    );
};

export default ApexChart;