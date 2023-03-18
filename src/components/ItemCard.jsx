import React from "react";
import "./itemCard.css";
import { Link } from "react-router-dom";

export default function ItemCard({ title, price, image, id }) {
  return (
    <div className="main-card" key={id}>
      <Link to={`/${id}`} id="link">
        <img className="item-card-img" src={image} alt="item-pic" />
        <p className="card-info">{title}</p>
        <p className="card-info" id="price">
          $ {price}{" "}
        </p>
      </Link>
    </div>
  );
}
