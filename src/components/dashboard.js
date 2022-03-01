import React from "react";
import { Link } from "react-router-dom";
import Stock from "../pages/Stocks";
import data from "../store/data";

const Dashboard = (props) => {
    return(
  data.map((stock, index) => {
    return (
      <div key={stock.name}>
        <Link to={`/stocks/${stock.symbol}`}>
            <li>{stock.name}</li>
        </Link>
      </div>
    );
  }))
};

export default Dashboard;
