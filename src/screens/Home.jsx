import "./home.css";
import ItemCard from "../components/ItemCard.jsx";
import { useEffect, useState } from "react";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  const [data, setData] = useState([]);
  const [item, setItems] = useState("");
  const [buttonText, setSelectedCat] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://fake-store-api-production-c25d.up.railway.app/items"
      );
      const data = await response.json();
      if (item === "most expensive") {
        setData(data.sort((a, b) => b.price - a.price));
      } else if (item === "least expensive") {
        setData(data.sort((a, b) => a.price - b.price));
      } else {
        setData(data);
      }
    }

    fetchData();
  }, [item]);

  useEffect(() => {
    async function fetchcats() {
      const response = await fetch(
        "https://fake-store-api-production-c25d.up.railway.app/items"
      );
      const res = await response.json();
      if (buttonText !== "") {
        const fx = res.filter(
          (category) => category.category === `${buttonText}`
        );
        console.log(fx);
        setData(fx);
      } else {
        setData(res);
      }
    }
    fetchcats();
  }, [buttonText]);

  const categories = Array.from(new Set(data.map((item) => item.category)));

  // Sort Buttons
  const filterByMost = () => {
    setItems("most expensive");
  };
  const filterByLeast = () => {
    setItems("least expensive");
  };
  const clearFilter = () => {
    setItems("");
    setSelectedCat("");
  };

  const handleCategoryClick = (event) => {
    const text = event.target.innerText;
    setSelectedCat(text);
  };
  return (
    <div className="main-container">
      
      <Header />
      <br/>
      <div className="button-container">
        {categories.map((category) => (
          <button className="category-buttons" onClick={handleCategoryClick}> {category}</button>
        ))}
        </div>
        <br />
        <div className="price-sort">
        <button className="filterBox" onClick={filterByMost}>
          Most Expensive
        </button>
        <button className="filterBox" onClick={filterByLeast}>
          Least Expensive
        </button>
        <button className="filterBox" onClick={clearFilter}>
          Clear Filters
        </button>
        <button className="filterBox"> <a href="#hello"> items </a>
          
        </button>
      </div>
      <div className="item-listings">
        {data.map((item) => (
          <ItemCard
            img={item.image}
            id={item._id}
            title={item.title}
            price={`From $${item.price}`}
          />
        ))}
      </div>
    </div>
  );
}
