import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialBarChart = ({ percentage }) => {
  const indicatorColor = "#05FFA6";
  const options = {
    series: [percentage],
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "20px",
            color: "#000000",
            offsetY: 10,
            fontWeight: "bold",
          },
          total: {
            show: false,
          },
        },
      },
    },
    labels: [""],
    colors: [indicatorColor],
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="radialBar"
        height={150}
        width={100}
      />
    </div>
  );
};

export default RadialBarChart;
