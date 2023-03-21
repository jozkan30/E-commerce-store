import "./home.css";
import ItemCard from "../components/ItemCard.jsx";
import { useEffect, useState } from "react";
import { getItems } from "../services/item";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  const [item, setItems] = useState([]);
  const [sortItems, setSortItems] = useState("");
  const [buttonText, setbButtonText] = useState("");

  useEffect(() => {
    fetchData();
    filterByCategory();
  }, [sortItems, buttonText]);

  async function fetchData() {
    const data = await getItems();
    if (sortItems === "most expensive") {
      setItems(data.sort((a, b) => b.price - a.price));
    } else if (sortItems === "least expensive") {
      setItems(data.sort((a, b) => a.price - b.price));
    } else if (sortItems === "") {
      setItems(data);
    } else {
      setItems(data);
    }
  }

  // Filter by cat logic
  async function filterByCategory() {
    const data = await getItems();
    if (buttonText !== "") {
      setItems(
        data.filter((category) => category.category === `${buttonText}`)
      );
    }
  }
  const categories = Array.from(
    new Set(item.map((category) => category.category))
  );
  console.log(categories);

  // Sort Buttons
  const sortByMost = () => {
    setSortItems("most expensive");
  };
  const sortByLeast = () => {
    setSortItems("least expensive");
  };
  const clearSortAndFilter = () => {
    setSortItems("");
    setbButtonText("");
  };

  const handleCategoryClick = (event) => {
    const text = event.target.innerText;
    setbButtonText(text);
  };
  return (
    <div className="main-container">
      <Header />
      <div className="cat-container">
        {categories.map((info) => (
          <button className="cats" onClick={handleCategoryClick}>
            {info}
          </button>
        ))}
      </div>
      <br />
      <div className="price-sort">
        <button className="filterBox" onClick={sortByMost}>
          Most Expensive
        </button>
        <button className="filterBox" onClick={sortByLeast}>
          Least Expensive
        </button>
        <button className="filterBox" onClick={clearSortAndFilter}>
          Clear Filters
        </button>
      </div>
      <div className="item-listings" id="allItems">
        {item.map((info) => (
          <ItemCard
            id={`${info._id}`}
            image={info.image}
            title={info.title}
            price={info.price}
          />
        ))}
      </div>
    </div>
  );
}
