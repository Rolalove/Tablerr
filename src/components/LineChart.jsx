import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto"; 

const LineChart = () => {
  const activityData = useSelector((state) => state.dashboard.activityData);

  const data = {
    labels: Array.from(
      { length: activityData.length },
      (_, i) => `Day ${i + 1}`
    ),
    datasets: [
      {
        label: "Purchases",
        data: activityData,
        borderColor: "#7ea5dd",
        backgroundColor: "#ecf2fa",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: { display: false },
        ticks: { display: false },
        grid: { display: false },
      },
      y: {
        title: { display: false },
        ticks: { display: false },
        grid: { display: false },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
