import React, { useState } from "react";
import walletIcon from "../assets/images/Wallet.png";
import toggleIcon from "../assets/images/angle-icon.png";
import buyIcon from "../assets/images/buy.png";
import sellIcon from "../assets/images/sell.png";
import Button from "./Button";

export default function BtcBalance() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bitcoin-card_balance">
      <div className="bitcoin-card_balance_head">
        <div className="bitcoin-card_balance_head_icon">
          <img src={walletIcon} alt="Wallet Icon" />
          <h3>Bitcoin</h3>
        </div>
        <h3 className="bitcoin-card_balance_head_right">BTC</h3>
      </div>
      <div className="bitcoin-card_balance_main_amount">
        <h1>3.529020 BTC</h1>
      </div>
      <div className="bitcoin-card_balance_usd">
        <h3>$19.153 USD</h3>
        <div className="btn_percentage">-2.32%</div>
      </div>
      <div className="bitcoin-card_balance_toggle" onClick={toggleExpand}>
        {isExpanded ? (
          <img className="expand" src={toggleIcon} alt="" />
        ) : (
          <img src={toggleIcon} alt="" />
        )}
      </div>
      {isExpanded && (
        <div className="bitcoin-card_balance_expand">
          <Button imgSrc={buyIcon} label="Buy BTC" />
          <Button imgSrc={sellIcon} label="Sell BTC" />
        </div>
      )}
    </div>
  );
}
