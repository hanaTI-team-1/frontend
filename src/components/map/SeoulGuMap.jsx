import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const SeoulGuMap = () => {
  const navigate = useNavigate();
  const [seoulGeoJsonData, setSeoulGeoJsonData] = useState(null); // 서울특별시 경계 데이터를 상태로 관리합니다.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import("../../data/seoul_gu.json");
        setSeoulGeoJsonData(response.default);
      } catch (error) {
        console.log("Error loading Seoul GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedGu, setSelectedGu] = React.useState(null);
  const seoulGu = ["동작구", "강남구", "송파구", "강서구", "관악구"];

  const onEachFeature = (feature, layer) => {
    layer.setStyle({
      color: "#3388ff",
      weight: 0.5,
      opacity: 1,
      // transition: "fillColor 0.3s ease-in-out",
    });

    if (
      feature.geometry.type === "Polygon" &&
      seoulGu.includes(feature.properties.SIG_KOR_NM)
    ) {
      layer.setStyle({
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        cursor: "pointer",
        // transition: "fillColor 0.3s ease-in-out",
      });

      layer.on({
        mouseover: () => {
          layer.setStyle({
            fillColor: "#D6E7FF",
            transition: "fillColor 0.3s ease-in-out",
          });
        },
        mouseout: () => {
          layer.setStyle({
            fillColor: "#3388ff",
            transition: "fillColor 0.3s ease-in-out",
          });
        },
        click: () => {
          // console.log("구 클릭:", feature.properties.SIG_KOR_NM);
          setSelectedGu(feature.properties.SIG_KOR_NM);
          navigate(`/recommend/${feature.properties.SIG_KOR_NM}`);
        },
      });

      layer.bindTooltip(feature.properties.SIG_KOR_NM, {
        permanent: true,
        direction: "top",
      });
    }
  };

  return (
    <>
      <MapContainer
        center={[37.5665, 126.978]}
        zoom={11}
        className="h-[550px] w-full bg-white mx-auto scale-90"
        dragging={false}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        {seoulGeoJsonData && (
          <GeoJSON data={seoulGeoJsonData} onEachFeature={onEachFeature} />
        )}
      </MapContainer>
    </>
  );
};

export default SeoulGuMap;
