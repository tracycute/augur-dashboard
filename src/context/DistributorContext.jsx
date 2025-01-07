import React, { createContext, useState, useContext } from "react";

// Tạo context cho Distributor
const DistributorContext = createContext();

// Hook để truy cập vào DistributorContext
export const useDistributorContext = () => {
  return useContext(DistributorContext);
};

// Cung cấp dữ liệu và setState cho các component con
export const DistributorProvider = ({ children }) => {
  // Dữ liệu giả lập cho các nhà phân phối
  const [distributors, setDistributors] = useState([
    {
      name: "Tracy",
      shippedLastMonth: 1003,
      forecastedNextMonth: 1777,
      ytdAvgMonthlyShipment: 1180,
    },
    {
      name: "Nguyen",
      shippedLastMonth: 930,
      forecastedNextMonth: 1000,
      ytdAvgMonthlyShipment: 980,
    },
    {
      name: "Le",
      shippedLastMonth: 1777,
      forecastedNextMonth: 1700,
      ytdAvgMonthlyShipment: 1600,
    },
    {
      name: "Sam",
      shippedLastMonth: 1200,
      forecastedNextMonth: 1400,
      ytdAvgMonthlyShipment: 1300,
    },
    {
      name: "Linda",
      shippedLastMonth: 1100,
      forecastedNextMonth: 1150,
      ytdAvgMonthlyShipment: 1125,
    },
    {
      name: "John",
      shippedLastMonth: 950,
      forecastedNextMonth: 1100,
      ytdAvgMonthlyShipment: 1000,
    },
  ]);

  // Trả về context với dữ liệu và hàm setDistributors
  return (
    <DistributorContext.Provider value={{ distributors, setDistributors }}>
      {children}
    </DistributorContext.Provider>
  );
};
