import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const BarChart = () => {
  const donutData = useSelector((state) => state.dashboard.donutData);

  const data = {
    labels: ['New Tickett', 'Closed Ticket'],
    datasets: [
      {
        data: donutData,
        backgroundColor: [ '#8ecf4d', '#5dba2c'],
        hoverBackgroundColor: ['#8ecf4d','#5dba2c' ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
};

export default BarChart;
