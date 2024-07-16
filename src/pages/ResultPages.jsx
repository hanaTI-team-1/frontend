import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { checkList } from "../data/checkList";
import PassCard from "../components/PassCard";
import { TfiFaceSmile } from "react-icons/tfi";
import InfraChart from "../components/InfraChart";
import { CheckBtn } from "../components/Utils";
import CheckHugBtn from "../components/Hugs";

function Result1() {
  return (
    <div className="h-[1024px]">
      <div className="pl-20 pt-20 animate__animated animate__fadeIn">
        <div className="text-3xl font-black">서울특별시 관악구 신림동</div>
        <div className="text-2xl">00로 (123-12) 3층 20평</div>
      </div>

      <div className="text-center mt-6 animate__animated animate__fadeIn">
        <TfiFaceSmile size="225" className="ml-auto mr-auto" />
        <div className="text-3xl font-bold mt-20 ">
          해당 매물은 6개의 검사중 ~개를 통과했어요
        </div>
      </div>
      <div className="flex justify-evenly pt-20 animate__animated animate__fadeInUp pb-12">
        {checkList.map((check, index) => {
          return <PassCard key={index} check={check} />;
        })}
      </div>
      <div className="flex justify-center mt-10">
        <IoIosArrowDown
          className="cursor-pointer"
          size="75"
          onClick={() => {
            window.scrollTo({ top: 1024, behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
}

function Result2() {
  return (
    <div className="h-[1024px] bg-slate-300 flex">
      <div className="w-full text-center">
        <div className="text-4xl font-black mt-20">
          예방AI가 예측한 전세가격이에요
        </div>
        <div className="text-4xl font-bold mt-10">200,000,000</div>
        <div className="w-[1300px] mx-auto">
          <InfraChart />
        </div>
        <div className="text-3xl font-bold mt-20">
          예방 AI는 총 18가지 원인을 분석해서 전세가격을 예측하고 있어요
        </div>
      </div>
    </div>
  );
}

function Result3() {
  let rate = 80;
  return (
    <div className="h-[1024px] bg-slate-200 flex pr-36">
      <div className="w-full text-center">
        <div className="text-4xl font-black mt-20">
          예방AI가 계산한 전세가율이에요
        </div>
        <div className="text-xl font-bold mt-7 text-gray-400">
          해당 매물은 적정가격보다 10% 더 저렴해요
        </div>
        <div className="flex justify-evenly items-end mt-20">
          <div className="flex flex-col items-center ">
            <img src="/building.png" style={{ width: rate + "%" }} />
            <div className="font-bold mt-6">
              <div className="text-xl">전세가</div>
              <div className="text-3xl">180,000,000</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/building.png" />
            <div className="font-bold mt-6">
              <div className="text-xl">적정가</div>
              <div className="text-3xl">200,000,000</div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold mt-20">
          예방 AI는 전세가율(전세가 / 매매가) 기준을 20%로 하고 있어요
        </div>
      </div>
    </div>
  );
}

function Result4() {
  const titleList = [
    "등기부등본을 확인해보세요!",
    "건축물대장을 확인해보세요!",
    "공인중개사를 확인해보세요!",
  ];
  const checkList = [false, true, true];
  return (
    <>
      <div className="flex flex-col h-[1024px] bg-slate-300 ">
        <div className="h-[968px] flex">
          {/* <ResultNav /> */}
          <div className="w-full text-center">
            <div className="text-4xl font-black mt-32">
              부동산 거래 필수 요소 4가지
            </div>
            <div className="flex justify-evenly mt-36">
              {titleList.map((title, index) => {
                return (
                  <CheckBtn
                    key={index}
                    title={title}
                    check={checkList[index]}
                  />
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
            <div className="text-3xl font-bold mt-24">
              부동산 거래 필수 요소를 확인해 전세 사기를 예방하세요
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <IoIosArrowUp
            className="cursor-pointer"
            size="75"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </>
  );
}

export { Result1, Result2, Result3, Result4 };
