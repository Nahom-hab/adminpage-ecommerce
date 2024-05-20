"use client";

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';

Chart.register(ArcElement, Tooltip, Legend);

const OrdersCategoryPieChart = ({ orderData }) => {
  // Group the orders by category and calculate the total amount for each category
  const ordersByCategory = orderData.reduce((acc, order) => {
    order.products.forEach((product) => {
      if (!acc[product.category]) {
        acc[product.category] = { totalAmount: 0, count: 0 };
      }
      acc[product.category].totalAmount += product.quantity * product.price;
      acc[product.category].count += 1;
    });
    return acc;
  }, {});

  // Sort the categories by total amount in descending order and take the top 8
  const topCategories = Object.entries(ordersByCategory)
    .sort(([, a], [, b]) => b.totalAmount - a.totalAmount)
    .slice(0, 8)
    .map(([category]) => category);

  // Define an array of colors
  const colors = [
    'rgba(255, 99, 132)',
    'rgba(54, 162, 235 )',
    'rgba(255, 206, 86)',
    'rgba(75, 192, 192)',
    'rgba(153, 102, 255)',
    'rgba(255, 159, 64)',
    'rgba(201, 203, 207)',
    'rgba(255, 99, 132)',
  ];

  // Prepare the data for the pie chart
  const chartData = {
    labels: topCategories,
    datasets: [
      {
        label: 'Total Amount',
        data: topCategories.map((category) => ordersByCategory[category].totalAmount),
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace('0.8', '1')),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Top 8 Orders by Category',
      },
      legend: {
        position: 'left',
        labels: {
          boxWidth: 12,
          padding: 20,
          
        },
      },
    },
    layout: {
      padding: {
        left: 50,
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default OrdersCategoryPieChart;