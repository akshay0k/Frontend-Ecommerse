import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import CartContext from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDisplay(props) {
  const { product } = props;
  const { addItem } = useContext(CartContext);

  console.log("product",product);
  const addToCartHandler = () => {
    addItem(product);
    toast("The Product Added!");
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-old-price">{product.old_price}</div>
          <div className="productdisplay-new-price">{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
         {product?.description}
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCartHandler()}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> {product?.category}</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest </p>
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
}
