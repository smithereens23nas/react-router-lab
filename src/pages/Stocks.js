import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Dashboard from "../components/dashboard";
import stockData from "../store/data";
import { Outlet } from "react-router";

const Stocks = () => {
  return (
    <div>
      <Dashboard stock={stockData} />
      <Outlet />
    </div>
  );
};

export default Stocks;
