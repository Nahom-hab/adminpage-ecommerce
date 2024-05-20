"use client";

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

function registerChartJSPlugins() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
}

export default function ChartComponent({ userData }) {
  registerChartJSPlugins();

  const userCountByDate = userData.reduce((acc, user) => {
    const date = user.createdAt;
    if (acc[date]) {
      acc[date] += 1;
    } else {
      acc[date] = 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(userCountByDate).map((dateString) => new Date(dateString).toLocaleDateString()),
    datasets: [
      {
        label: 'Number of Users',
        data: Object.values(userCountByDate),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Users Created Per Day',
        font: {
          size: 18,
        },
      },
      legend: {
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className='linechart'>
      <Line data={chartData} options={options} />
    </div>
  );
}