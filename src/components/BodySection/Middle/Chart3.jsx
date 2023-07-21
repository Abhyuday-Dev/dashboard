import React from 'react';
import Chart from "react-apexcharts";
import "./Chart3.css";

const Chart3 = () => {
  const chartOptions = {
    title: {
      text: 'Contributions Overtime',
      style: {
        fontSize: '20px',
        fontWeight: 'bold', 
        color: '#333', 
      },
    },
    chart: {
      stacked: true,
    },
    xaxis: {
      categories: [20, 25, 30, 35, 40, 60, 65],
      labels: {
        style: {
          colors: '#c0c0c0', // Change the color of x-axis labels
          fontSize: '12px',
          fontWeight:"500"
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$'+value.toFixed(0);
        },
        style: {
          colors: '#c0c0c0', // Change the color of x-axis labels
          fontSize: '12px',
          fontWeight:"500"
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return '$'+ value.toFixed(0);
        },
      },
    },
    dataLabels: {
      enabled: false, 
    },
    plotOptions: {
      bar: {
        horizontal: false, 
        columnWidth: '30%', 
      },
    },
    legend: {
      position: 'top',
      fontSize: '10px',
      display: "inline-block",
      width: "80px",
    },
  };

  const chartSeries = [
    {
      name: "Employer:K 72,000",
      data: [10, 40, 80, 120, 160, 200, 240], 
      color: "#00008b",
    },
    {
      name: "Employee:K 52,000",
      data: [20, 40, 80, 120, 160, 200, 240], 
      color: "#6528F7",
    },
    {
      name: "Total Interest:K 214.555",
      data: [30, 40, 80, 120, 160, 200, 240], 
      color: "#75C2F6",
    },
  ];

  return (
    <div className='chart-3'>
      <Chart options={chartOptions} series={chartSeries} type="bar" width={320} height={250} />
    </div>
  );
};

export default Chart3;
