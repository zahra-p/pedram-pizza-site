import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> پیتزا پدرام </h1>
        <p> پیتزا برای هر سلیقه ای</p>
        <Link to="/menu">
          <button> اکنون سفارش دهید </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;