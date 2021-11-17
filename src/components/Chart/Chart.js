import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);


  return (
    <div className="chart">
      { props.dataPoints.map(dataPoint => 
         <ChartBar 
          key={'key' + dataPoint.title}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.title}
        />) }
    </div>
  )
}

export default Chart;
