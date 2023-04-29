import React from "react";
import wineData from "../JsonData/Wine-Data.json"
import { useEffect, useRef } from "react";
import * as echarts from "echarts";


const Bar = () => {
    const Alcohol = wineData.map((it) => it.Alcohol)
    const Magnesium = wineData.map((it) => it.Magnesium);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
          initChart(chartRef.current);
        }
      });

    function initChart(dom) {
      let chart = echarts.init(dom);
      const option = {
        xAxis: {
          name: "Alcohol",
          type: "category",
          data: Alcohol
        },
        yAxis: {
          name: "Magnesium",
          type: "value",
          data: Magnesium
        },
        series: [
          {
            name: "Magnesium",
            data: Magnesium,
            type: "bar",
            smooth: true
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
      chart.setOption(option);
    }
    return (
      <>
        <div className="chartRef" ref={chartRef}></div>
      </>
    );
};

export default Bar;