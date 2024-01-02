import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DeliveryInformation.css";
import CartContext from "../../Context/CartContext";
import { OrderContext } from "../../Context/OrderContext";

const DeliveryInformation = () => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    address: "",
    contactNumber: "",
    additionalNotes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const {clearCart,items} = useContext(CartContext);
  const { orders, addOrder, updateOrder } = useContext(OrderContext);

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the collected delivery information and payment method
    console.log("Delivery Information submitted:", deliveryInfo);
    console.log("Payment Method:", paymentMethod);
  };

  const handleConfirm = () => {
    if(deliveryInfo.name && deliveryInfo.address && deliveryInfo.contactNumber && paymentMethod){
      console.log("items in cart",items);
      addOrder(items)
      alert("Delivery Information submitted:", deliveryInfo);
      clearCart()
      navigate("/orderhistory");
    }else{
      alert("All the fields except additionalNotes are required")
    }
  };

  return (
    <div className="delivery-info-container">
      <h1>Delivery Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={deliveryInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={deliveryInfo.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={deliveryInfo.contactNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentChange}>
            <option value="cod">Cash On Delivery (COD)</option>
          </select>
        </label>
          <button onClick={()=>handleConfirm()} type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default DeliveryInformation;
