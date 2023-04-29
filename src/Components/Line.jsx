import React from "react";
import wineData from "../JsonData/Wine-Data.json"
import { useEffect, useRef } from "react";
import * as echarts from "echarts";


const Line = () => {
    const Flavanoids = wineData.map((it) => it.Flavanoids)
    const Ash = wineData.map((it) => it.Ash);
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
          name: "Flavanoids",
          type: "category",
          data: Flavanoids,
        },
        yAxis: {
          name: "Ash",
          type: "value",
          data:Ash
        },
        series: [
          {
            name: "Ash",
            data: Ash,
            type: "line",
            smooth:true,
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

export default Line;