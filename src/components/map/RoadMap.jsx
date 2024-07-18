import { Roadview, RoadviewMarker } from "react-kakao-maps-sdk";

export default function RoadMap({ lat, lng }) {
  const markerSize = { width: 52, height: 52 };

  return (
    <Roadview // 로드뷰를 표시할 Container
      position={{
        // 지도의 중심좌표
        lat: lat,
        lng: lng,
        radius: 50,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "360px",
      }}
    >
      <RoadviewMarker
        position={{ lat: lat, lng: lng }}
        image={{
          src: "/markers/home-kakao.png",
          size: markerSize,
        }}
      >
        {/* <div className="text-center">스페이스 닷원</div> */}
      </RoadviewMarker>
    </Roadview>
  );
}
