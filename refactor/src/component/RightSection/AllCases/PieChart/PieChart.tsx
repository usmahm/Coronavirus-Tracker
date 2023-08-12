import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import { TotalCasesDataType } from "../../../../types";
import { colours } from "../../../../utils/constants";
import styles from "./PieChart.module.scss";

type ComponentProps = {
  data: TotalCasesDataType;
}

const PieChart: React.FC<ComponentProps> = ({ data }) => {
  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create("pieChartViz", am4charts.PieChart);
      
      // Add data
      chart.data = [
        {
          title: "Active Cases",
          cases: data.totalActive, 
          colour: am4core.color(colours.purple)  
        },
        { 
          title: "Deaths",
          cases: data.totalDeaths,
          colour: am4core.color(colours.red)
        },
        { 
          title: "Recovered",
          cases: data.totalRecovered,
          colour: am4core.color(colours.green)
        },
      ];


      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries())

      pieSeries.dataFields.value = 'cases';
      pieSeries.dataFields.category = 'title';

      // Customize Look of the Chart
      chart.innerRadius = am4core.percent(40);
      pieSeries.slices.template.stroke = am4core.color(colours.deepBlue);
      pieSeries.slices.template.strokeWidth = 1;
      pieSeries.slices.template.opacity = 1;
      pieSeries.slices.template.propertyFields.fill = 'colour';
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      
      if (pieSeries.tooltip) {
        pieSeries.tooltip.fontSize = 12
      }
      
      pieSeries.slices.template.tooltipText = `{title} - [bold]{value.percent.formatNumber('.00')}%`;

    return () => {
      chart.dispose();
    };
  }, [data])

  return <div id="pieChartViz" className={styles.chart}></div>;
}

export default PieChart;
