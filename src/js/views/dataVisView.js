import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import mapData from '@amcharts/amcharts4-geodata'
import { colours } from './base'

export const renderPieChartVis = (data) => {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    
    // Add data
    chart.data = [
      {
        title: "Active Cases",
        cases: data.activeCases, 
        colour: am4core.color(colours.purple)  
      },
      { 
        title: "Deaths",
        cases: data.deaths,
        colour: am4core.color(colours.red)
      },
      { 
        title: "Recovered",
        cases: data.recovered,
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
    pieSeries.tooltip.label.fontSize = 12;
    pieSeries.slices.template.tooltipText = `{title} - [bold]{value.percent.formatNumber('.00')}%`;
}

export const renderMapVis = (data) => {
    // Create Map Instance
    let map = am4core.create('map-div', am4maps.MapChart);

    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();

    // Create Polygon series

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true
    polygonSeries.exclude = ['AQ']
    map.series.push(polygonSeries);
    polygonSeries.data = parseMapData(data);
    // console.log(polygonSeries.data)
    
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
    polygonSeries.tooltip.fontSize = 12

    // Create hover state and set alternative fill colour
    let hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#0062e7');
    
    
    
}

const parseMapData = (data) => {
    console.log(data)
    let dataObj = [];
    data.forEach((el, ind) => {
        let obj = {
            "id": data[ind].id,
            "name": data[ind].countryName,
            "value": data[ind].totalCases,
            "deaths": data[ind].totalDeaths,
            "rec": data[ind].totalRec,
            "active": data[ind].activeCases
        }
        dataObj.push(obj);
    });
    console.log(dataObj);  
    return dataObj;
} 
