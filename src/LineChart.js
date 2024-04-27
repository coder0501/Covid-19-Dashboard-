import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

// Registering scales and elements
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);
  
// Line Chart for historical data
function LineChart({ data, label }) {
  console.log("data",data);
  console.log("case",data.cases);
  console.log("deaths",data.deaths);
  console.log("deaths",data.recovered);
  const chartData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Total Cases',
        data: data.cases,
        borderColor: 'rgba(114,128,207)', // Red
        borderWidth: 1,
        tension: 0, // This makes the line straight
      },
      {
        label: 'Total Recovered',
        data: data.recovered,
        borderColor: 'rgba(124,252,0)', // Green
        borderWidth: 1,
        tension: 0, // This makes the line straight
      },
      {
        label: 'Total Deaths',
        data: data.deaths,
        borderColor: 'rgba(255,87,51)', // Blue
        borderWidth: 1,
        tension: 0, // This makes the line straight
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: true,
      },
    },
    scales: {
      x: {
        type: 'category', // Define the type of the axis
        labels: ['2019', '2020', '2021', '2022', '2023'], // Define specific labels for the x-axis
      },
      y: {
        beginAtZero: true,
        ticks: {
          // Custom formatting of ticks to show 'M' for millions
          callback: function(value, index, ticks) {
            return value / 1e6 + 'M';
          }
        }
      }
    }
  };

  return <Line data={chartData} options={lineOptions} />;
}

export default LineChart;

