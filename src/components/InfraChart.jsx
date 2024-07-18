import ReactApexChart from "react-apexcharts";
import { useState } from "react";
export default function InfraChart({ busStop, school, police, mart, subway }) {
  const colors = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c"];

  const [options, setOptions] = useState({
    chart: {
      height: 600,
      type: "bar",
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "35%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      fontSize: "22.5px",
      fontWeight: "bold",
      markers: {
        size: 12.5,
      },
      itemMargin: {
        horizontal: 15,
      },
    },
    xaxis: {
      categories: ["지하철", "버스정류장", "학군", "경찰서", "마트"],
      labels: {
        show: false,
        style: {
          colors: colors,
          fontSize: "15px",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    tooltip: {
      enabled: true,
    },
  });

  const [series, setSeries] = useState([
    {
      data: [subway, busStop, school, police, mart],
    },
  ]);

  return (
    <div className="mt-8">
      <h1 className="text-center mt-5 text-xl font-bold">인프라 정보</h1>
      <h3 className="text-center mt-3 text-md text-gray-400 font-semibold">
        z-score를 통해 분석한 결과입니다
      </h3>
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
