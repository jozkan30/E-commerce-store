import React from "react";
import './itemCard.css';
import { Link } from "react-router-dom"
export default function ItemCard(props) {

  return (
    <div className="main-card" key={props.id}>  
        <img className="item-card-img" src={props.img} alt="item-pic"/>
        <Link to={`/${props.id}`}>
        <p className="card-info">{props.title} </p>
        </Link>
        <p className="card-info" id="price">{props.price} </p>
    </div>
  );
}
