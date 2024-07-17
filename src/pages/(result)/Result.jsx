import { useParams } from "react-router-dom";
import { PassCard2 } from "../../components/card/PassCard2";
import InfraChart from "../../components/InfraChart";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Separator } from "../../components/Separator";
import { api } from "../../lib/api";
import { ResultCard } from "./_components/ResultCard";
import { ResultCard2 } from "./_components/ResultCard2";

export default function Result() {
  const { atclNo } = useParams();
  const [isPending, setIsPending] = useState(false);
  const [isHugOk, setIsHugOk] = useState(1);
  const [isCertiOk, setIsCertiOk] = useState(1);
  const [jeonse, setJeonse] = useState(null);
  const [successCount, setSuccessCount] = useState(0);

  useEffect(() => {
    const getInfo = async () => {
      setIsPending(true);
      const result = await api.get(
        `/http://34.64.201.85:8081/api/jeonse/check-list?actlNo=${atclNo}`
      );
      setJeonse(result.data.data.jeonse);
      setIsPending(false);
      let count = 0;
      if (result.data.data.jeonse.jeonseRate.success) count++;
      if (result.data.data.jeonse.builderLedger.success) count++;
      if (result.data.data.jeonse.certifiedRealEstateAgent.success) count++;
      if (result.data.data.jeonse.appropriateJeonsePrice.success) count++;
      setSuccessCount(count);
    };
    getInfo();

    setSuccessCount(count);
  }, []);

  if (isPending) {
    return (
      <main className="min-h-full flex justify-center bg-slate-50">
        <div className="min-h-full w-full max-w-[800px] bg-white border-l border-r shadow-md">
          <h2 className="mt-36 bg-neutral-600 py-5 text-white w-full text-center text-4xl font-bold">
            AI가 전세 사기 체크리스트를 불러오고 있어요!
          </h2>
          <div className="pt-20 flex justify-center">
            <div className="h-96 w-96 flex items-center justify-center relative">
              <div className="absolute h-40 w-40 rounded-full bg-blue-200/50 animate-ping" />
              <img
                src="/vite.svg"
                width={128}
                height={128}
                alt="loading"
                className="inset-0 z-10 w-48 h-48"
              />
            </div>
          </div>
          <div className="pt-20 flex justify-center">
            <p className="w-72 opacity-70">
              검사는 최대 1분까지 소요될 수 있습니다...
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-full flex justify-center bg-slate-50">
        <div className="py-24 px-5 h-full w-full max-w-[800px] bg-white border-l border-r shadow-md">
          <section>
            <h2 className="ml-2 text-3xl font-black">{jeonse.address}</h2>
            <h3 className="ml-2 mt-1 text-2xl">
              {jeonse.atclNm} {jeonse.rletTpNm} {jeonse.flrInfo.split("/")[0]}층
            </h3>

            <div className="w-full h-[300px] flex justify-center">
              <img
                src="/smile-girl.jpg"
                width={300}
                height={300}
                alt="girl-smile"
              />
            </div>
            <h2 className="text-3xl font-bold text-center mt-10 text-neutral-700">
              해당 매물은{" "}
              <strong className="text-blue-400">{successCount}</strong>/6개의
              검사를 통과했습니다
            </h2>
            <ul className="flex flex-wrap justify-between gap-10 p-10">
              <ResultCard
                type={0}
                success={jeonse.appropriateJeonsePrice.success}
              />
              <ResultCard type={1} success={jeonse.jeonseRate.success} />
              <ResultCard type={2} success={jeonse.builderLedger.success} />
              <ResultCard
                type={3}
                success={jeonse.certifiedRealEstateAgent.success}
              />
              <ResultCard2 type={4} isOk={isHugOk} />
              <ResultCard2 type={5} isOk={isCertiOk} />
            </ul>
          </section>
          <Separator margin={40} />
          <section>
            <div className="w-full text-center">
              <div className="text-4xl font-black mt-20">
                예방AI가 진단한 전세가격이에요
              </div>
              <div className="text-4xl font-bold mt-10">200,000,000</div>
              <InfraChart />
              <div className="text-3xl font-bold mt-20">
                예방 AI는 총 18가지 원인을 분석해서 전세가격을 예측하고 있어요
              </div>
            </div>
          </section>
          <Separator margin={50} />
          <Section3 jeonse={jeonse} />
          <Separator margin={50} />
          <PassCard2 />
          <div className="pt-20 flex justify-center pb-5">
            <IoIosArrowUp
              className="cursor-pointer"
              size="72"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}

function Section3({ jeonse }) {
  let rate = 80;
  return (
    <section className="pt-10 text-center">
      <div className="text-4xl font-black">예방AI가 계산한 전세가율이에요</div>
      <div className="mt-5 text-xl font-bold opacity-70">
        해당 매물은 적정가격보다 10% 더 저렴해요
      </div>
      <div className="flex justify-evenly items-end mt-20">
        <div className="flex flex-col items-center">
          <img src="/building.png" style={{ width: rate + "%" }} />
          <div className="font-bold mt-6">
            <div className="text-xl">전세가</div>
            <div className="text-3xl">1,800만원</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src="/building.png" />
          <div className="font-bold mt-6">
            <div className="text-xl">적정가</div>
            <div className="text-3xl">
              {jeonse.appropriateJeonsePrice.jeonsePrice > 100000 &&
                (jeonse.appropriateJeonsePrice.jeonsePrice / 10000) |
                  (0 + "억")}
              {jeonse.appropriateJeonsePrice.jeonsePrice % 10000}만원
            </div>
          </div>
        </div>
      </div>
      <p className="text-3xl font-bold mt-20">
        예방 AI는 전세가율(전세가 / 매매가) 기준을 20%로 하고 있어요
      </p>
    </section>
  );
}
