import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Data from '../store/data'

const StockShowPage = () => {
  const params = useParams();
  const symbol = params.symbol;
  const stock = Data.find((stock) => stock.symbol === symbol);
  return (
    <div>
      <h2>{stock.name}</h2>
      <h3>{stock.symbol}</h3>
      <h3>{stock.lastPrice}</h3>
      <h3>{stock.change}</h3>
      <h3>{stock.change}</h3>
    </div>
  );
};

export default StockShowPage