import"./home.css"
import ItemCard from "../components/ItemCard.jsx";
import { useEffect, useState} from "react";

import React from 'react'

export default function Home() {
    const [data, setData] = useState([]);
    const [item,  setItems] = useState("")

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://fake-store-api-production-c25d.up.railway.app/items");
        const data = await response.json();
        if( item === "most expensive" ){
         setData(data.sort((a,b)=> b.price - a.price))
        } else if (item === "least expensive"){
        setData(data.sort((a,b)=> a.price - b.price))
        } else{
          setData(data)
        }
      }
      fetchData();
    }, [item]);
  
  
// Filter Buttons
let filterByMost = () =>{
setItems("most expensive")
}
let filterByLeast = () =>{
setItems("least expensive")
}
let clearFilter = () =>{
setItems("clear")
}

return (

    <div className="main container">
        <div>
            <button className="filterBox" onClick={filterByMost}> Most Expensive </button>
            <button className="filterBox" onClick={filterByLeast}> Least Expensive </button>
            <button className="filterBox" onClick={clearFilter}> Clear Filters </button>
        </div>
        <div className="item-listings">
        {data.map((item)=>(
            <ItemCard 
            img={item.image}
            id={item._id}
            title ={item.title}
            price ={ `From $${item.price}`}
            />
        ))}
        </div>
      
    </div>
  )
}
