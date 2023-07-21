import React from "react";
import Chart from "react-apexcharts";
import "./Chart3.css";

const Chart2 = () => {
  const chartOptions = {
    title: {
      text: "Contributions Overtime",
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    chart: {
      stacked: true,
    },
    xaxis: {
      categories: [20, , 25, , 30, , 35, , 40, , 60, , 65],
    },
    yaxis: {
      categories: [0, 100, 200, 400],
      labels: {
        maxItems: 4,
      },
      forceNiceScale: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
      },
    },
    legend: {
      position: "top",
      fontSize: "10px",
    },
  };

  const chartSeries = [
    {
      name: "Employer:K 72,000",
      data: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90],
      color: "#00008b",
    },
    {
      name: "Employee:K 52,000",
      data: [12, 20, 28, 32, 38, 45, 50, 60, 63, 70, 75, 80, 88],
      color: "#6528F7",
    },
    {
      name: "Total Interest:K 214.555",
      data: [20, 35, 55, 65, 75, 78, 82, 90, 95, 100, 105, 110, 115],
      color: "#75C2F6",
    },
  ];

  return (
    <div className="chart-2">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        width={500}
        height={260}
      />
    </div>
  );
};

export default Chart2;
