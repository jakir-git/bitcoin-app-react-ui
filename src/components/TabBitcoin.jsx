import React, { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

export default function TabBitcoin() {
  const tabs = ["Day", "Week", "Month", "Year"];
  const [activeTab, setActiveTab] = useState(tabs[1]);
  const [lower, setLower] = useState(0);
  const [higher, setHigher] = useState(0);
  const [btcRate, setBtcRate] = useState(0);

  const data = {
    Day: [
      { name: "Day 1", uv: 2000, pv: 2400, amt: 2400 },
      { name: "Day 2", uv: 3300, pv: 1398, amt: 2210 },
      { name: "Day 3", uv: 3300, pv: 9800, amt: 2290 },
      { name: "Day 4", uv: 3000, pv: 3908, amt: 2000 },
      { name: "Day 5", uv: 4100, pv: 4800, amt: 2181 },
    ],
    Week: [
      { name: "Week 1", uv: 2500, pv: 2400, amt: 2400 },
      { name: "Week 2", uv: 3300, pv: 1398, amt: 2210 },
      { name: "Week 3", uv: 3300, pv: 9800, amt: 2290 },
      { name: "Week 4", uv: 3000, pv: 3908, amt: 2000 },
      { name: "Week 5", uv: 4100, pv: 4800, amt: 2181 },
    ],
    Month: [
      { name: "Month 1", uv: 2000, pv: 2400, amt: 2400 },
      { name: "Month 2", uv: 2300, pv: 1398, amt: 2210 },
      { name: "Month 3", uv: 3300, pv: 9800, amt: 2290 },
      { name: "Month 4", uv: 3800, pv: 3908, amt: 2000 },
      { name: "Month 5", uv: 4100, pv: 4800, amt: 2181 },
    ],
    Year: [
      { name: "Year 1", uv: 3500, pv: 2400, amt: 2400 },
      { name: "Year 2", uv: 2300, pv: 1398, amt: 2210 },
      { name: "Year 3", uv: 3300, pv: 9800, amt: 2290 },
      { name: "Year 4", uv: 4000, pv: 3908, amt: 2000 },
      { name: "Year 5", uv: 4100, pv: 4800, amt: 2181 },
    ],
  };

  // Function to calculate lower, higher, and BTC rate
  const calculateStats = (tab) => {
    const values = data[tab].map((item) => item.uv); // Use 'uv' as the value
    const lower = Math.min(...values);
    const higher = Math.max(...values);
    const btcRate = values.reduce((a, b) => a + b, 0) / values.length; // Average
    setLower(lower);
    setHigher(higher);
    setBtcRate(btcRate.toFixed(2)); // Round to 2 decimals
  };

  useEffect(() => {
    calculateStats(activeTab);
  }, [activeTab]);

  return (
    <div className="tabbar">
      <div className="tabbar_buttons">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tabbar_button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tabbar_content">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tabbar_panel ${activeTab === tab ? "active" : ""}`}
          >
            {activeTab === tab && (
              <ResponsiveContainer width="100%" height={220}>
                <div className="tabbar_dollar_rate">
                  <div className="dollar_rate_single lower">
                    <span> Lower: ${lower} </span>
                  </div>
                  <div className="dollar_rate_single higher">
                    <span> Higher: ${higher} </span>
                  </div>
                </div>
                <LineChart data={data[activeTab]}>
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                <div className="bitcoin_rate">1 BTC = ${btcRate}</div>
              </ResponsiveContainer>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
