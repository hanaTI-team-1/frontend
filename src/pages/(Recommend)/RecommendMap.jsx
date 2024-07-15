import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecommendMap() {
  const navigate = useNavigate();
  const { address, options } = useParams();
  let [price, school, chiAn, gs25, mart, subway, bus] = options.split("+");

  let [addressN, aptName] = address.split("+");
  addressN = addressN.replace("서울특별시", "서울");
  const [protectList, setProtectList] = useState();
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  const [center, setCenter] = useState([]);

  let mapWidth = 1440;

  const getProtectList = async () => {
    try {
      const response = await axios.get("/sample.json");
      setProtectList(response.data.data);
      setCenter([response.data.data[0]["lat"], response.data.data[0]["lng"]]);
      setIsLoading(false); // 데이터 로딩 완료 후 로딩 상태 업데이트
    } catch (error) {
      console.error("Error fetching the protect list:", error);
      setIsLoading(false); // 오류 발생 시에도 로딩 상태 업데이트
    }
  };

  useEffect(() => {
    getProtectList();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>로딩중입니다...</div>
      ) : (
        <>
          <div className="flex h-[968px]">
            <Map
              center={{
                lat: center[0],
                lng: center[1],
              }}
              style={{ width: mapWidth + "px", height: "968px" }}
              isPanto={true}
              level={1}
            >
              {protectList.map((protect, index) => {
                return (
                  <MapMarker
                    key={index}
                    position={{ lat: protect["lat"], lng: protect["lng"] }}
                  ></MapMarker>
                );
              })}
            </Map>
            <div className="bg-slate-200 relative">
              {protectList.map((protect, index) => {
                return (
                  <div
                    className="cursor-pointer"
                    key={index}
                    onClick={() => {
                      setCenter([protect["lat"], protect["lng"]]);
                    }}
                  >
                    <RecommendCard
                      address={[addressN, aptName]}
                      price={price}
                    />
                  </div>
                );
              })}
              {/* <RecommendDetail address={"강서구"} price={"1억"} /> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

function RecommendCard({ address, price }) {
  return (
    <>
      <div className="flex w-[480px] pt-10 pb-10 pl-10 pr-10 items-center bg-slate-50 mb-5">
        <div className="w-[100px] h-[100px] bg-slate-600"></div>
        <div className="pl-10">
          <div className="text-xl font-bold">{address[0]}</div>
          <div className="text-md">{address[1]}</div>
          <div className="text-2xl font-bold">{price}원</div>
        </div>
      </div>
    </>
  );
}

// function RecommendDetail({ address, price }) {
//   return (
//     <>
//       <div className="w-[480px] h-full bg-slate-400 absolute right-[480px] top-0 z-50 opacity-70">
//         <div>{address}</div>
//         <div>{price}</div>

//       </div>
//     </>
//   );
// }
