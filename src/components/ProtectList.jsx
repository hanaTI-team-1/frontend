import { useParams } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { JeonseCard } from "./JeonseCard";

export default function ProtectList() {
  const { id } = useParams();
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
      <div className="min-h-[350px] flex flex-col justify-end mb-36">
        <div className="text-center">
          <div className="text-4xl">전세 매물 결과입니다.</div>
          <div>총 3건의 매물이 검색되었습니다.</div>
        </div>
      </div>
      <ul>
        {protectList.map((protect, index) => {
          console.log(protect);
          return (
            <JeonseCard
              address1={protect.address}
              address2={protect.atclNm + protect.bildNm + protect.spc2 + "평"}
              price={protect.hanPrc}
            />
          );
        })}
      </ul>
    </>
  );
}
