import { useNavigate, useParams } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { JeonseCard } from "./JeonseCard";

export default function RecommendList() {
  const navigate = useNavigate();
  const { address, options } = useParams();
  let [price, school, chiAn, gs25, mart, subway, bus] = options.split("+");

  let [addressN, aptName] = address.split("+");
  addressN = addressN.replace("서울특별시", "서울");
  const [protectList, setProtectList] = useState([]);

  const getProtectList = async () => {
    try {
      const response = await axios.get("/sample.json");
      setProtectList(response.data.data);
    } catch (error) {
      console.error("Error fetching the protect list:", error);
    }
  };

  useEffect(() => {
    getProtectList();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-[475px] flex flex-col justify-end pb-10 mb-10">
        <div className="text-center animate__animated animate__fadeInUp">
          <div className="text-4xl">
            <span className="font-bold">예방AI</span>가 매물을 추천드립니다
          </div>
          <div className="mt-2 font-semibold font-md text-xl">결과입니다</div>
        </div>
      </div>
      <ul className="animate__animated animate__fadeIn">
        {protectList.map((protect, index) => {
          return <JeonseCard key={index} protect={protect} isProtect={false} />;
        })}
      </ul>
      <div className="w-[650px] flex text-lg font-medium justify-between mx-auto">
        <div
          className="text-center w-48 pt-2 pb-2 bg-slate-200 rounded-xl cursor-pointer"
          onClick={() => {
            navigate("/recommend");
          }}
        >
          추천으로 돌아가기
        </div>
        <div
          className="text-center w-48 pt-2 pb-2 border-2 border-blue-500 rounded-xl cursor-pointer"
          onClick={() => {
            navigate(
              `/recommend/${address}/${price}+${school}+${chiAn}+${gs25}+${mart}+${subway}+${bus}/map`
            );
          }}
        >
          자세히보기
        </div>
      </div>
    </>
  );
}
