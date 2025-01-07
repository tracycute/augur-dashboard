import React from 'react';

const DistributorCard = ({ distributor }) => {
  return (
    <div className="distributor-card">
      <h2>{distributor.name}</h2>
      <p><strong>Shipped Last Month:</strong> {distributor.shippedLastMonth} units</p>
      <p><strong>Forecasted Next Month:</strong> {distributor.forecastedNextMonth} units</p>
      <p><strong>YTD Avg. Monthly Shipment:</strong> {distributor.ytdAvgMonthlyShipment} units</p>
    </div>
  );
};

export default DistributorCard;
