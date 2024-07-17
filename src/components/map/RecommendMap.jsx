import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function RecommendMap({ result, index }) {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [level, setLevel] = useState(9);
  const averagePosition = result.reduce(
    (acc, cur) => {
      return {
        jeonse: {
          lat: acc.jeonse.lat + cur.jeonse.lat,
          lng: acc.jeonse.lng + cur.jeonse.lng,
        },
      };
    },
    { jeonse: { lat: 0, lng: 0 } }
  );
  const averageLat = averagePosition.jeonse.lat / result.length;
  const averageLng = averagePosition.jeonse.lng / result.length;
  useEffect(() => {
    if (index === "") {
      setCenter({
        lat: averageLat,
        lng: averageLng,
      });
    } else {
      setCenter({
        lat: result[index].jeonse.lat,
        lng: result[index].jeonse.lng,
      });
      setLevel(3);
    }
    console.log(center);
  }, [index]);

  const markerSize = { width: 52, height: 52 };

  return (
    <div className="flex justify-center">
      <Map
        center={center}
        style={{ width: "80%", height: "280px" }}
        level={level}
      >
        {result.map((item, index) => {
          return (
            <MapMarker
              key={index}
              position={{ lat: item.jeonse.lat, lng: item.jeonse.lng }}
              image={{
                src: "/markers/home.png",
                size: markerSize,
              }}
            ></MapMarker>
          );
        })}
        {/* <MapMarker position={{ lat: lat, lng: lng }}> */}
        {/* <div style={{ color: "#000" }}>{atclNm}</div> */}
        {/* </MapMarker> */}
      </Map>
    </div>
  );
}
