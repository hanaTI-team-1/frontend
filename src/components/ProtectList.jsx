import { useParams } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { JeonseCard } from "./JeonseCard";

export default function ProtectList() {
  const { id } = useParams();

  let [address, aptName] = id.split("+");
  address = address.replace("서울특별시", "서울");
  const [protectList, setProtectList] = useState([]);
  // const getProtectList = async () => {
  //   try {
  //     const response = await axios.get("/sample.json");
  //     setProtectList(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching the protect list:", error);
  //   }
  // };

  const getProtectList = async () => {
    try {
      const response = await axios.get(
        "http://34.64.201.85:8081/api/jeonse/remain",
        {
          params: {
            address: address,
            aptName: aptName,
          },
        }
      );
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
      <div className="min-h-[350px] flex flex-col justify-end mb-36">
        <div className="text-center">
          <div className="text-4xl">전세 매물 결과입니다.</div>
          <div>총 {protectList.length}건의 매물이 검색되었습니다.</div>
        </div>
      </div>
      <ul>
        {protectList.map((protect, index) => {
          return <JeonseCard key={index} protect={protect} />;
        })}
      </ul>
    </>
  );
}
