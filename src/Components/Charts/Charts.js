import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Charts = (props) => {
  console.log("dataPoints", props);

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          label={datapoint.label}
          maxValue={totalMaximum}
          value={datapoint.value}
        />
      ))}
    </div>
  );
};
export default Charts;
