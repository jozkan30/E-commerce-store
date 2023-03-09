import React from "react";
import './itemCard.css';
export default function ItemCard(props) {

  return (
    <div className="main-card" key={props.id}>  
        <img className="item-card-img" src={props.img} alt="item-pic"/>
        <p className="card-info">{props.title} </p>
        <p className="card-info" id="price">{props.price} </p>
      
    </div>
  );
}
