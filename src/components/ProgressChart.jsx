import React from "react";
import "./ProgressChart.css";

function ProgressChart({ progress }) {
  let color = "red";
  if (progress >= 80) color = "green";
  else if (progress >= 50) color = "goldenrod";

  return (
    <div className="progress-chart">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: color }}></div>
      </div>
      <p>{Math.round(progress)}% completed</p>
    </div>
  );
}

export default ProgressChart;
