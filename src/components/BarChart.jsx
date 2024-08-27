import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
  // Extract names and prices from the data
  const categories = data.map(stock => stock.name);
  const seriesData = data.map(stock => stock.price);

  const chartData = {
    series: [{
      name: 'Price',
      data: seriesData
    }],
    options: {
      chart: {
        type: 'bar',
            height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      
      xaxis: {
        categories: categories,
        title: {
          text: 'Holdings'
        }
      },
      yaxis: {
        title: {
          text: 'Price'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: (val) => `$${val}`
        }
      }
    }
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
