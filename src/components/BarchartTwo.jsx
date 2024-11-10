import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

const BarChartTwo = () => {
  const donutDataTwo = useSelector((state) => state.dashboard.donutDataTwo);

  const data = {
    labels: ["New Ticket", "Closed Ticket"],
    datasets: [
      {
        data: donutDataTwo,
        backgroundColor: ["#467fcf", "#1c3353", "#c8d9f1", "#7ea5dd"],
        hoverBackgroundColor: ["#467fcf", "#1c3353", "#c8d9f1", "#7ea5dd"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
};

export default BarChartTwo;
