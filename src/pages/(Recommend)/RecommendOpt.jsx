import { useEffect, useState } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

// RecommendOption 컴포넌트 정의
function RecommendOption({ title, defaultValue, onChange }) {
  const [range, setRange] = useState(defaultValue); // 초기 범위 값 설정

  const handleChange = (newRange) => {
    // newRange가 현재 range와 같으면 이동하지 않도록 처리
    if (newRange[0] !== range[0]) {
      setRange(newRange);
      onChange(newRange); // 부모 컴포넌트로 범위 변경을 전달
    }
  };

  return (
    <div className="w-[400px] flex justify-center items-center mb-10">
      <div className="w-[100px] mr-5">
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <div className="w-[300px]">
        <RangeSlider
          value={range}
          min={1}
          max={3}
          step={1}
          onChange={handleChange}
        >
          <RangeSliderTrack bg="#3388ff">
            <RangeSliderFilledTrack bg="#D6E7FF" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} bg="#D4D4D8" />
        </RangeSlider>
      </div>
    </div>
  );
}

// RecommendOpt 컴포넌트
export default function RecommendOpt() {
  const { gu, dong } = useParams();
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [hanPrice, setHanPrice] = useState("");

  // 각 항목에 대한 초기 범위 값 설정
  const [policeStationsRange, setPoliceStationsRange] = useState([1, 3]);
  const [groceriesRange, setGroceriesRange] = useState([1, 3]);
  const [schoolsRange, setSchoolsRange] = useState([1, 3]);
  const [busStationsRange, setBusStationsRange] = useState([1, 3]);
  const [subwayStationsRange, setSubwayStationsRange] = useState([1, 3]);

  // 범위 변경 시 처리 함수
  const handlePoliceStationsChange = (newRange) => {
    setPoliceStationsRange(newRange);
  };

  const handleGroceriesChange = (newRange) => {
    setGroceriesRange(newRange);
  };

  const handleSchoolsChange = (newRange) => {
    setSchoolsRange(newRange);
  };

  const handleBusStationsChange = (newRange) => {
    setBusStationsRange(newRange);
  };

  const handleSubwayStationsChange = (newRange) => {
    setSubwayStationsRange(newRange);
  };

  const getKoreanNumber = (price) => {
    setPrice(price);
    let number = price;
    const koreanUnits = ["조", "억", "만", ""];
    const unit = 10000;
    let result = "";

    while (number > 0) {
      const mod = number % unit;
      const modToString = mod.toString().replace(/(\d)(\d{3})/, "$1,$2");
      number = Math.floor(number / unit);
      result = `${modToString}${koreanUnits.pop()}${result}`;
    }

    setHanPrice(result);
  };

  return (
    <>
      <main className="min-h-full w-full flex justify-center bg-slate-50">
        <div className="pt-28 w-full max-w-[800px] flex flex-col items-center bg-white border shadow-md">
          <h1 className="text-center text-4xl font-semibold">
            <span className="font-black">예방AI</span>가 전세 매물을 추천해줘요!
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-center break-keep">
            원하시는 금액과 인프라를 선택해주세요
          </p>
          <p className="text-md sm:text-xl text-center break-keep text-blue-400 font-semibold">
            {gu} {dong}
          </p>
          <div className="relative px-2 mt-10 w-full max-w-[650px]">
            <form>
              <input
                id="price"
                name="price"
                autoComplete="off"
                onChange={(e) => {
                  getKoreanNumber(e.target.value);
                }}
                placeholder="원하시는 금액을 입력해주세요"
                className="pl-3 sm:pl-10 w-full h-12 sm:h-20 border-2 rounded-lg md:rounded-full text-sm sm:text-xl shadow-lg focus:outline-none"
              />
              <span className="sm:w-20 sm:h-14 sm:aspect-square flex items-center justify-center absolute top-1/2 right-4 sm:right-5 transform -translate-y-1/2 rounded-lg md:rounded-full duration-150 text-xs">
                {hanPrice}
              </span>
              <button
                type="submit"
                className="h-8 w-10 sm:w-auto sm:h-14 sm:aspect-square flex items-center justify-center absolute top-1/2 right-4 sm:right-5 transform -translate-y-1/2 cursor-pointer rounded-lg md:rounded-full  bg-blue-100 text-blue-500 hover:bg-blue-200 hover:opacity-60 duration-150 shadow-md hidden"
              ></button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center w-[800px] mt-10">
            {/* 각 항목별 RecommendOption 컴포넌트 사용 */}
            <RecommendOption
              title="치안"
              defaultValue={policeStationsRange}
              onChange={handlePoliceStationsChange}
            />
            <RecommendOption
              title="편의점"
              defaultValue={groceriesRange}
              onChange={handleGroceriesChange}
            />
            <RecommendOption
              title="학교"
              defaultValue={schoolsRange}
              onChange={handleSchoolsChange}
            />
            <RecommendOption
              title="버스"
              defaultValue={busStationsRange}
              onChange={handleBusStationsChange}
            />
            <RecommendOption
              title="지하철"
              defaultValue={subwayStationsRange}
              onChange={handleSubwayStationsChange}
            />
          </div>
          <div className="flex justify-center items-center">
            <div
              className="rounded-lg bg-blue-400 pl-10 pr-10 pt-2 pb-2 text-lg text-black cursor-pointer hover:bg-blue-200 hover:rounded-none duration-300"
              onClick={() => {}}
            >
              추천 받기
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
