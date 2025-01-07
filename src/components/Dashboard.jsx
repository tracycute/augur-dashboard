import React from 'react';
import { useDistributorContext } from '../context/DistributorContext';
import DistributorCard from './DistributorCard';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần của chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const { distributors } = useDistributorContext();

  // Dữ liệu cho các biểu đồ
  const data = {
    labels: distributors.map(d => d.name),
    datasets: [
      {
        label: 'Shipped Last Month',
        data: distributors.map(d => d.shippedLastMonth),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false, // Không điền màu dưới biểu đồ
      },
      {
        label: 'Forecasted Next Month',
        data: distributors.map(d => d.forecastedNextMonth),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
        fill: false, // Không điền màu dưới biểu đồ
      },
      {
        label: 'YTD Avg Monthly Shipment',
        data: distributors.map(d => d.ytdAvgMonthlyShipment),
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
        fill: false, // Không điền màu dưới biểu đồ
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="cards">
        {distributors.map((distributor, index) => (
          <DistributorCard key={index} distributor={distributor} />
        ))}
      </div>

      <div className="chart">
        <h2>Augur Chart</h2>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
