import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import "./tooltip.css";

const SeoulDongMap = ({ gu }) => {
  const selectedGu = "서울특별시 " + gu;

  const navigate = useNavigate();
  const [seoulGeoJsonData, setSeoulGeoJsonData] = useState(null);
  const [filteredFeatures, setFilteredFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import("../../data/seoul_dong.json");
        setSeoulGeoJsonData(response.default);
      } catch (error) {
        console.log("Error loading Seoul GeoJSON data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (seoulGeoJsonData) {
      const filtered = seoulGeoJsonData.features.filter((feature) =>
        feature.properties.adm_nm.includes(selectedGu)
      );

      setFilteredFeatures(filtered);
      // console.log("Filtered features:", filtered);
    }
  }, [seoulGeoJsonData, gu]);

  const guCenter = [
    { gu: "강남구", center: [37.49664389, 127.0629852] },
    { gu: "송파구", center: [37.50561924, 127.115295] },
    { gu: "동작구", center: [37.49887688, 126.9516415] },
    { gu: "강서구", center: [37.56123543, 126.822807] },
    { gu: "관악구", center: [37.46737569, 126.9453372] },
  ];

  const center = guCenter.find((item) => item.gu === gu)?.center;

  const onEachFeature = (feature, layer) => {
    layer.setStyle({
      color: "#3388ff",
      weight: 2,
      opacity: 1,
      cursor: "pointer",
      transition: "fillColor 0.3s ease-in-out",
    });
    layer.on({
      click: (e) => {
        // console.log("동 클릭:", feature.properties.adm_nm);
        const dong = feature.properties.adm_nm
          .replace("서울특별시 ", "")
          .replace(gu + " ", "");
        navigate("/recommend/" + gu + "/" + dong);
      },
      mouseover: () => {
        layer.setStyle({
          fillColor: "#D6E7FF",
        });
      },
      mouseout: () => {
        layer.setStyle({
          fillColor: "#3388ff",
        });
      },
    });

    layer.bindTooltip(
      feature.properties.adm_nm
        .replace("서울특별시 ", "")
        .replace(gu + " ", ""),
      {
        // permanent: true,
        direction: "top",
      }
    );
  };

  if (!seoulGeoJsonData) {
    return <div></div>; // 데이터 로딩 중 표시할 내용
  }

  if (filteredFeatures.length === 0) {
    return <div></div>; // 필터링된 데이터가 없을 때 표시할 내용
  }

  return (
    <>
      <MapContainer
        center={center}
        zoom={13}
        className="h-[650px] w-full bg-white mx-auto scale-75"
        dragging={false}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        <GeoJSON data={filteredFeatures} onEachFeature={onEachFeature} />
      </MapContainer>
    </>
  );
};

export default SeoulDongMap;
