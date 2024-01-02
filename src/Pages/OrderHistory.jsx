import React, { useContext } from 'react';
import './CSS/OrderHistory.css';
import { OrderContext } from '../Context/OrderContext';

const OrderHistory = () => {

  const { orderList, updateOrderDetails } = useContext(OrderContext);

  const calculateTotalAmount = (order)=>{
    return order.reduce((acc, value)=>{
      return value.totalPrice + acc
    }, 0)
  }

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
     {orderList.map((item,index)=>{
      console.log("order",item);
      return (
        <div className="order-list">
          <div className="order">
            <div className="order-details">
              <p>Order ID: {index+1}</p>
              <p>Date: 2022-01-01</p>
            </div>
            <div className="order-items">
              { item.map((itm,ind)=>{
                return (
                  <p>
                    {ind + 1}. {itm.name}
                  </p>
                );
              })}
            </div>
            <div className="order-total">
              <p>Total: ${calculateTotalAmount(item)}</p>
            </div>
          </div>
        </div>
      );
     })}
    </div>
  );
};

export default OrderHistory;