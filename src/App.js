import React from "react";
import buyIocn from "./assets/images/buy.png";
import sellIocn from "./assets/images/sell.png";
import "./assets/styles/main.css";
import BtcBalance from "./components/BtcBalance";
import Button from "./components/Button";
import Header from "./components/Header";
import TabBitcoin from "./components/TabBitcoin";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_content">
        <BtcBalance />
        <TabBitcoin />
        <div className="button-container">
          <Button imgSrc={buyIocn} label="Buy BTC" />
          <Button imgSrc={sellIocn} label="Sell BTC" />
        </div>
      </div>
    </div>
  );
}
