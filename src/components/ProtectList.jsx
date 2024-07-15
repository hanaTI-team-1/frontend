import { useNavigate, useParams } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { JeonseCard } from "./JeonseCard";
import "animate.css";
import { IoIosArrowBack } from "react-icons/io";

export default function ProtectList() {
  const { id } = useParams();
  const navigate = useNavigate();

  let [address, aptName] = id.split("+");
  address = address.replace("서울특별시", "서울");
  const [protectList, setProtectList] = useState([]);

  const getProtectList = async () => {
    try {
      // const response = await axios.get(
      //   "http://34.64.201.85:8081/api/jeonse/remain",
      //   {
      //     params: {
      //       address: address,
      //       aptName: aptName,
      //     },
      //   }
      // );
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
      <div className="min-h-[350px] flex flex-col justify-end mb-36 animate__animated animate__fadeIn">
        <div className="text-center">
          <div className="text-4xl">전세 매물 결과입니다</div>
          <div>총 {protectList.length}건의 매물이 검색되었습니다</div>
        </div>
      </div>
      {protectList.length === 0 ? (
        <div className="flex flex-col items-center animate__animated animate__fadeInUp">
          <div className="text-lg font-black text-gray-400">
            검색 결과가 없다면?
          </div>
          <div
            className="text-xl font-bold mt-3 bg-slate-400 text-white pl-7 pr-7 pt-3 pb-3 rounded-lg cursor-pointer"
            onClick={() => {
              navigate("/protect");
            }}
          >
            다시 검색하러가기
          </div>
        </div>
      ) : (
        <>
          <ul className="animate__animated animate__fadeIn">
            {protectList.map((protect, index) => {
              return (
                <JeonseCard key={index} protect={protect} isProtect={true} />
              );
            })}
          </ul>
        </>
      )}

      <div
        className="fixed top-[900px] left-[50px] cursor-pointer"
        onClick={() => {
          navigate("/protect");
        }}
      >
        <IoIosArrowBack size="50" />
      </div>
    </>
  );
}
