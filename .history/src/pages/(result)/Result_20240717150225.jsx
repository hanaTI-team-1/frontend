import { useParams } from "react-router-dom";
import { InfoCard1 } from "../../components/card/InfoCard1";
import { InfoCard2 } from "../../components/card/InfoCard2";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Separator } from "../../components/Separator";
import { api } from "../../lib/api";
import { ResultCard } from "./_components/ResultCard";
import { ResultCard2 } from "./_components/ResultCard2";
import { FaMapMarkerAlt } from "react-icons/fa";
import KakaoMap from "../../components/KakaoMap";
import InfraChart from '../../components/InfraChart';

export default function Result() {
  const { atclNo } = useParams();
  const [isHugOk, setIsHugOk] = useState(1);
  const [isCertiOk, setIsCertiOk] = useState(1);
  const [jeonse, setJeonse] = useState(null);
  const [successCount, setSuccessCount] = useState(0);

  useEffect(() => {
    const getInfo = async () => {
      const result = await api.get(`/jeonse/check-list?actlNo=${atclNo}`);
      setJeonse(result.data.data);
      let count = 0;
      if (result.data.data.jeonseRate.success) count++;
      if (result.data.data.builderLedger.success) count++;
      if (result.data.data.certifiedRealEstateAgent.success) count++;
      if (result.data.data.appropriateJeonsePrice.success) count++;
      setSuccessCount(count);
    };
    getInfo();
  }, []);

  if (!jeonse) {
    return (
      <main className="min-h-full flex justify-center bg-slate-50">
        <div className="min-h-full w-full max-w-[800px] bg-white border-l border-r shadow-md">
          <h2 className="mt-36 bg-neutral-600 py-5 text-white w-full text-center text-4xl font-bold">
            AI가 전세 사기 체크리스트를 불러오고 있습니다
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
              검사는 최대 1분까지 소요될 수 있습니다
              <span className="animate-dots"></span>
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-full flex justify-center bg-slate-50">
      <div className="py-24 px-5 h-full w-full max-w-[800px] bg-white border-l border-r shadow-md">
        <section>
          <h2 className="ml-2 text-3xl font-black">{jeonse.jeonse.address}</h2>
          <h3 className="ml-2 mt-1 text-2xl">
            {jeonse.jeonse.atclNm} {jeonse.jeonse.rletTpNm}{" "}
            {jeonse.jeonse.flrInfo.split("/")[0]}층
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
            <ResultCard2 type={4} isOk={isCertiOk} />
            <ResultCard2 type={5} isOk={isHugOk} setIsHugOk={setIsHugOk} />
          </ul>
        </section>
        <Separator mt={100} mb={60} />
        <Section1 data={jeonse.appropriateJeonsePrice} />
        <Separator mt={140} mb={60} />
        <Section2 data={jeonse.jeonseRate} />
        <Separator mt={140} mb={60} />
        <Section3 data={jeonse.builderLedger} jeonse={jeonse.jeonse} />
        <Separator mt={140} mb={60} />
        <div className="space-y-5">
          <InfoCard1 />
          <InfoCard2 />
        </div>
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
  );
}

// 적정전세가 섹션
const Section1 = ({ data }) => {
  return (
    <section className="w-full">
      <h2 className="pl-5 opacity-70 text-2xl font-bold">적정전세가</h2>
      <div className="mt-16 opacity-90 text-3xl font-bold text-center">
        예방AI가 진단한 적정전세가격입니다.
      </div>
      <div
        className={`mt-4 text-4xl font-bold text-center  ${
          data.success ? "text-blue-400" : "text-rose-400"
        }`}
      >
        {/* {data.jeonsePrice > 100000 && (data.jeonsePrice / 10000) | (0 + "억")} */}
        <console className="log">{Math.floor(data.jeonsePrice / 10000) | ("억")}</console>
        {console.log(data)}
        {data.jeonsePrice > 10000 && (Math.floor(data.jeonsePrice / 10000))}
        {data.jeonsePrice % 10000}만원
      </div>
      {/* <div className="mt-10 w-full h-96 bg-rose-100 flex items-center justify-center">
        차트그리기
      </div> */}
      <InfraChart />
      <div className="w-full flex justify-center">
        <p className="mt-10 max-w-[80%] opacity-60 text-sm text-center break-keep">
          예방 AI는 총 전세에 영향을 주는 18가지 지표를 분석하여 전세가격을
          예측하고 있습니다.
        </p>
      </div>
    </section>
  );
};

// 전세가율 섹션
const Section2 = ({ data }) => {
  return (
    <section className="w-full">
      <h2 className="pl-5 opacity-70 text-2xl font-bold">전세가율</h2>
      <div className="mt-16 opacity-90 text-5xl font-semibold text-center">
        전세가율:{" "}
        <strong
          className={`${
            data.jeonseSaleRate <= 70 ? "text-blue-400" : "text-rose-400"
          }`}
        >
          {data.jeonseSaleRate}%
        </strong>
      </div>
      <h3
        className={`mt-10 opacity-85 text-3xl font-bold text-center
          ${data.success ? "text-blue-400" : "text-rose-400"}`}
      >
        {data.jeonseSaleRate <= 70 ? "안전합니다" : "위험합니다"}
      </h3>
      <div className="mt-20 opacity-70 text-xl font-medium text-center"></div>
      <div className="w-full flex justify-center">
        <p className="max-w-[80%] opacity-60 text-sm text-center break-keep">
          전세가율이란 주택의 매매가격 대비 전세보증금의 비율을 수치로 표시한
          것이며, 높을 수록 위험도가 증가합니다. 저희 예방 서비스는 전세가율은
          70%이하를 권장드립니다.{" "}
          <a
            href="https://www.hankyung.com/article/2023050153501"
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            더 알아보기
          </a>
        </p>
      </div>
    </section>
  );
};

// 건출물 관리 대장 섹션
const Section3 = ({ data, jeonse }) => {
  return (
    <section className="w-full">
      <h2 className="pl-5 opacity-70 text-2xl font-bold">건축물 관리대장</h2>
      <div className="mt-10 px-16">
        <div className="border">
          <KakaoMap lat={jeonse.lat} lng={jeonse.lng} />
        </div>
      </div>
      <hgroup className="mt-2 space-y-10">
        <h3 className="pl-16 opacity-90 flex items-center gap-2 text-2xl font-semibold">
          <FaMapMarkerAlt className="text-blue-400" />
          {jeonse.address}
        </h3>
        <h3 className="opacity-90 text-center font-medium">
          {data.information}
        </h3>
        <h3
          className={`mt-10 opacity-85 text-3xl font-bold text-center ${
            data.success ? "text-blue-400" : "text-rose-500"
          }`}
        >
          {data.success ? "안전합니다" : "위험합니다"}
        </h3>
        <div className="w-full flex justify-center">
          <p className="max-w-[80%] opacity-60 text-sm text-center break-keep">
            건축물대장이란 해당 건축물의 소유/이용 및 유지/관리 상태를 확인할 수
            있는 장부로 시/군/군청에서 관리하는 공적 장부입니다. 예방 서비스에서
            1. 위반건축물 여부, 2. 주용도를 살펴본 결과 안전한 것으로 확인
            했습니다.
            <a
              href="https://gear-up3.com/%EA%B1%B4%EC%B6%95%EB%AC%BC%EB%8C%80%EC%9E%A5-%ED%99%95%EC%9D%B8%ED%95%98%EB%8A%94-%EB%B2%95-%EC%A0%84%EC%84%B8%EC%82%AC%EA%B8%B0-%EC%98%88%EB%B0%A9-%EA%B1%B4%EC%B6%95%EB%AC%BC%ED%98%84%ED%99%A9/"
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              더 알아보기
            </a>
          </p>
        </div>
      </hgroup>
    </section>
  );
};
