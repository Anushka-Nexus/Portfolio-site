import React from "react";

const StatsCard=({ label, value, sub })=>{
  return (
    <div className="stats-card">
      <p className="stats-label">• {label}</p>
      <h3 className="stats-value">{value}</h3>
      {sub && <p className="stats-sub">{sub}</p>}
    </div>
  )
}

export default StatsCard