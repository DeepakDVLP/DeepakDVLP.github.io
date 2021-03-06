import React from "react";
import AmCharts4Wrapper from "react-amcharts4";

import { PieChart } from "@amcharts/amcharts4/charts";

// Configure any reguired theme
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_material);

const config = {
  // Create pie series
  series: [
    {
      type: "PieSeries",
      dataFields: {
        value: "litres",
        category: "country"
      }
    }
  ],
  // Add data
  data: [
    {
      country: "Lithuania",
      litres: 501.9
    },
    {
      country: "Czech Republic",
      litres: 301.9
    },
    {
      country: "Ireland",
      litres: 201.1
    },
    {
      country: "Germany",
      litres: 165.8
    },
    {
      country: "Australia",
      litres: 139.9
    },
    {
      country: "Austria",
      litres: 128.3
    },
    {
      country: "UK",
      litres: 99
    },
    {
      country: "Belgium",
      litres: 60
    },
    {
      country: "The Netherlands",
      litres: 50
    }
  ]
};

const PyeChart = props => {
  return (
    <div style={{ width: "100%",height:"100%", margin: "0 auto" }}>
      <AmCharts4Wrapper
        config={config}
        id="amcharts-4"
        chartTypeClass={PieChart}
      />
    </div>
  );
};

export default PyeChart;