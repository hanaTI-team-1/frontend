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
    <main className="min-h-full h-full flex flex-col items-center bg-slate-50">
      <div className="min-h-full pt-28 px-10 max-w-[800px] w-full bg-white border shadow-md">
        <h1 className="text-center text-4xl font-semibold">
          전세 매물을 찾았습니다
        </h1>
        <h2 className="mt-3 text-center text-2xl font-medium">
          총 <strong className="text-blue-400">{result.length}</strong> 건의
          매물이 검색되었습니다
        </h2>
        <section className="mt-5 border-t p-5 max-h-[650px] overflow-y-auto">
          <ul className="space-y-5">
            {result.map((item, index) => {
              return (
                <JeonseCard2
                  info={item}
                  key={index}
                  url={`/protect/result/${item.atclNo}`}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
