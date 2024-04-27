import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement
);

function PieChart({ data }) {
  const chartData = {
    labels: ['Total Cases', 'Recoveries', 'Deaths'],
    datasets: [{
      data: [
        data.totalCases,
        data.recovered,
        data.deaths
      ],
      backgroundColor: [
        '#7280CF', // Color for cases
        '#7CFC00', // Color for recoveries
        '#FF5733'  // Color for deaths
      ]
    }]
  };

  const options = {
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return `${tooltipItem.label}: ${tooltipItem.raw}M`;
                }
            }
        },
        legend: {
            position: 'top',
        }
    }
  };

  return <Pie style={{height:'8rem', marginLeft:'8rem'}} data={chartData} options={options}/>;
}

export default PieChart;
