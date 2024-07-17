import ReactApexChart from "react-apexcharts";
import { useState } from "react";
export default function InfraChart(props) {
  const colors = [
    "#1f77b4",
    "#aec7e8",
    "#ff7f0e",
    "#ffbb78",
    "#2ca02c",
    "#98df8a",
  ];

  const [options, setOptions] = useState({
    chart: {
      height: 600,
      type: "bar",
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "30%",
        distributed: true,
        // horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      fontSize: "25px",
      fontWeight: "bold",
      markers: {
        size: 15,
      },
      itemMargin: {
        horizontal: 15,
      },
    },
    xaxis: {
      categories: ["학군", "치안", "버스정류장", "지하철", "마트"],
      labels: {
        style: {
          colors: colors,
          fontSize: "15px",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false, // 기본 툴팁 비활성화
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        // 사용자 지정 HTML 반환
        return "<div>Custom tooltip content</div>";
      },
    },
  });

  const [series, setSeries] = useState([
    {
      data: [props.school, props.police, props.busStop, 1, props.mart],
    },
  ]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={600}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
