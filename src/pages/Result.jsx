import "animate.css";

import { useParams } from "react-router-dom";
import { checkList } from "../data/checkList";
import PassCard from "../components/PassCard";
import { PassCard2 } from "../components/card/PassCard2";
import InfraChart from "../components/InfraChart";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { CheckBtn } from "../components/Utils";
import CheckHugBtn from "../components/Hugs";
import { Separator } from "../components/Separator";
import ResultNav from "../components/nav/ResultNav";

export default function Result() {
  const { atclNo } = useParams();
  const [count, setCount] = useState(3);
  const [countCheck, setCountCheck] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCountCheck((cur) => (count >= countCheck ? cur + 1 : count));
  //   }, 1000);
  // }, []);

  return (
    <>
      <main className="min-h-full flex justify-center bg-slate-50">
        <div className="py-24 px-5 h-full w-full max-w-[800px] bg-white border shadow-md">
          <section>
            <h2 className="ml-2 text-3xl font-black">
              서울특별시 관악구 신림동
            </h2>
            <h3 className="ml-2 mt-1 text-2xl">00로 (123-12) 3층 20평</h3>

            <div className="w-full h-[300px] flex justify-center">
              <img
                src="/smile-girl.jpg"
                width={300}
                height={300}
                alt="girl smile"
              />
            </div>
            <h2 className="text-3xl font-bold text-center mt-10 text-neutral-700">
              해당 매물은 <strong className="text-blue-400">3</strong>/6개의
              검사를 통과했습니다
            </h2>
            <div className="mt-10 px-10 flex justify-between flex-wrap gap-10">
              {checkList.map((check, index) => {
                return <PassCard key={index} check={check} />;
              })}
            </div>
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
          <Section3 />
          <Separator margin={50} />
          <PassCard2 />
          {/* <Section4 /> */}
          <div className="pt-20 flex justify-center pb-5">
            <IoIosArrowUp
              className="cursor-pointer"
              size="75"
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

function Section3() {
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
            <div className="text-3xl">200,000,000원</div>
          </div>
        </div>
      </div>
      <p className="text-3xl font-bold mt-20">
        예방 AI는 전세가율(전세가 / 매매가) 기준을 20%로 하고 있어요
      </p>
    </section>
  );
}

function Section4() {
  const titleList = [
    "등기부등본을 확인해보세요!",
    "건축물대장을 확인해보세요!",
    "공인중개사를 확인해보세요!",
  ];
  const checkList = [false, true, true];
  return (
    <section className="pt-20">
      <h2 className="text-4xl font-black text-center">
        부동산 거래 필수 요소 4가지
      </h2>
      {/* <ResultNav /> */}
      <div className="text-center">
        <div className="flex justify-evenly mt-36">
          {titleList.map((title, index) => {
            return (
              <CheckBtn key={index} title={title} check={checkList[index]} />
            );
          })}
          <div className="w-[275px]">
            <div className="text-lg font-bold">
              HUG 보증보험을 확인해보세요!
            </div>
            <div className="bg-slate-500 w-64 h-64 mt-5 mx-auto"></div>
            <CheckHugBtn />
          </div>
        </div>
        <div className="text-2xl font-medium mt-24">
          부동산 거래 필수 요소를 확인하여 전세 사기를 예방하세요
        </div>
      </div>
    </section>
  );
}
