import React, { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderList, setOrders] = useState([]);

  useEffect(() => {
    console.log("orders", orderList);
  }, [orderList]);

  const addOrder = (newOrder) => {
    console.log("newOrder",newOrder);
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const updateOrder = (orderId, updatedDetails) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, ...updatedDetails } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orderList, addOrder, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
