import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { JeonseCard2 } from "../components/card/JeonseCard2";
import "animate.css";
import { IoIosArrowBack } from "react-icons/io";
import { api } from "../lib/api";
import { Spinner } from "@chakra-ui/react";

export default function ProtectList() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id: address } = useParams();
  let [_bdNm] = useSearchParams("bdNm");
  const bdNm = decodeURI(decodeURIComponent(_bdNm));

  useEffect(() => {
    setIsLoading(true);
    const getResult = async () => {
      const result = await api.get(
        `/jeonse/remain?address=${address}&aptName=${bdNm.substring(5)}`
      );
      setResult(result.data.data);
      setIsLoading(false);
    };

    getResult();
  }, []);

  return (
    <main className="min-h-full flex flex-col items-center bg-slate-50">
      <div className="min-h-full py-28 px-10 max-w-[800px] w-full bg-white border shadow-md">
        <h1 className="text-center text-4xl font-semibold">
          전세 매물을 찾았습니다
        </h1>
        <h2 className="mt-3 text-center text-2xl font-medium">
          총 <strong className="text-blue-400">{result.length}</strong> 건의
          매물이 검색되었습니다
        </h2>
        <section className="pt-10 bg-rose-100">
          <ul className="space-y-5">
            {result.map((item, index) => {
              return <JeonseCard2 info={item} key={index} />;
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}

{
  /* <>
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
</> */
}
