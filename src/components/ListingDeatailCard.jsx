import React from "react";
import './listingdetailcard.css'
export default function ListingDetailCard({title, desc,image, cat, price}) {
  return(
  <div className="list-card">
    <h1>{title}</h1>
    <span> {cat} </span>
    <img className="detail-img" src={image} alt="LDC" />
    <div className="desc">
    <p className="desc">{desc}</p>
    </div>
    <p className="price">{price}</p>
  </div>
  )
}