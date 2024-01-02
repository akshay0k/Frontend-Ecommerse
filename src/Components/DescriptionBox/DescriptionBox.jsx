import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          provident at ipsa, deleniti dolor eius unde dolorem cupiditate,
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          officia autem obcaecati minus quasi ducimus? Vel, optio aspernatur
        </p>
      </div>
    </div>
  );
}
