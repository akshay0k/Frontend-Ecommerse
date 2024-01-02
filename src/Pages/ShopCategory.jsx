import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import drop_down from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
import all_product from "../Components/Assets/all_product";

const ShopCategory = (props) => {
  return (
    <div className="shopcategory">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
