import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem } from "../services/item.js";
import ListingDetailCard from "../components/ListingDeatailCard.jsx";
export default function ListingDetail() {
  const [itemDetail, setItemDetail] = useState([]);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchItem();
 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchItem() {
    let oneItem = await getItem(id);
    setItemDetail(oneItem);
  }
  return (
    <div className="main-listing-detail">
     <ListingDetailCard 
     title={itemDetail.title}
     cat={itemDetail.category}
     image={itemDetail.image}
     desc={itemDetail.description}
     price={` $ ${itemDetail.price}`}
     />
    </div>
  );
}
