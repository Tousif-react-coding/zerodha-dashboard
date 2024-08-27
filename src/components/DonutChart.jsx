import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ data }) => {
  const name = data.map(stock => stock.name);
  const price = data.map(stock => stock.price);

  const [chartData] = useState({
    series: price, // The values that represent the slices of the donut
    options: {
      chart: {
        type: 'donut',
      },
      labels: name, // Labels for each slice
      plotOptions: {
        pie: {
          donut: {
            size: '30%', // Adjust the inner radius size
          }
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div  >
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="donut"
      width="380"
    />
  </div>
  );
};

export default DonutChart;
