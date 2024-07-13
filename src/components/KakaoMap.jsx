import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap({ lat, lng, atclNm }) {
  return (
    <Map
      center={{ lat: lat, lng: lng }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: lat, lng: lng }}>
        {/* <div style={{ color: "#000" }}>{atclNm}</div> */}
      </MapMarker>
    </Map>
  );
}
