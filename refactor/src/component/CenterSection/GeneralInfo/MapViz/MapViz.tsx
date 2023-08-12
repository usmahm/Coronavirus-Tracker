import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import styles from "./MapViz.module.scss";
import { MapVizDataType } from "../../../../types";

type ComponentProps = {
  allCountriesData: MapVizDataType[];
}

const MapViz: React.FC<ComponentProps> = ({ allCountriesData }) => {
  useLayoutEffect(() => {
    let map = am4core.create('mapViz', am4maps.MapChart);
    
    if (allCountriesData.length) {
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller();
  
      let polygonSeries = new am4maps.MapPolygonSeries();
      polygonSeries.useGeodata = true
      polygonSeries.exclude = ['AQ']
      map.series.push(polygonSeries);
      polygonSeries.data = allCountriesData;
      
      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}\n Active - {active}\n Recovered - {rec}\n Deaths - {deaths}";
      polygonTemplate.tooltipHTML = `
              <p align="center" style="font-size: 15px; font-weight: 700;">{name}</p>
              <hr style="margin: 7px 0 10px 0; border: 1px solid;">
              <p align="center">Active - <span style="font-weight: 500;">{active}</span></p>
              <p align="center">Recovered - <span style="font-weight: 500;">{rec}</span></p>
              <p align="center">Deaths - <span style="font-weight: 500;">{deaths}</span></p>
          `
      ;
      polygonTemplate.fill = am4core.color('#85b2ef');
      if (polygonSeries.tooltip) {
        polygonSeries.tooltip.fontSize = 12
      }
  
      // Create hover state and set alternative fill colour
      let hs = polygonTemplate.states.create('hover');
      hs.properties.fill = am4core.color('#0062e7');
    }

    return () => {
      map.dispose();
    };
  }, [allCountriesData.length])

  return <div className={styles.mapViz} id="mapViz" />;

}

export default MapViz;
