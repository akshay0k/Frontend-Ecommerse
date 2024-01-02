import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import CartContext from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartItems() {
  const { items, addItem, decrementItem, totalAmount, removeItem } =
    useContext(CartContext);
  const navigate = useNavigate();
  const decrementFromCartHandler = (product) => {
    decrementItem(product.id);
  };

  const removeFromCartHandler = (product) => {
    removeItem(product.id);
  };

  const addToCartHandler = (product) => {
    console.log("clicked", product);
    addItem(product);
  };

  const handleProceedToCheckout = () => {
    const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

    if (loginStatus) {
      console.log("user is logged in");
      navigate("/deliveryinfo");
    } else {
      alert("user is not logged in please login first");
      navigate("/login");
    }
  };

  return items.length > 0 ? (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p> Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {items.map((item) => {
        return (
          <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={item.image} alt="" className="carticon-product-icon" />
              <p>{item.name}</p>
              <p>{item.new_price}</p>
              <div className="quantity-controller">
                <button
                  onClick={() => {
                    decrementFromCartHandler(item);
                  }}
                >
                  -
                </button>
                <button className="cartitems-quantity">
                  {Number(item.quantity)}
                </button>

                <button
                  onClick={() => {
                    addToCartHandler(item);
                  }}
                >
                  +
                </button>
              </div>
              <p>{Number(item.totalPrice)}</p>
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => {
                  removeFromCartHandler(item);
                }}
                alt=""
              />
            </div>
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>{totalAmount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shiipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{totalAmount}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              handleProceedToCheckout();
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p className="no-cart-items">No cart items</p>
  );
}
