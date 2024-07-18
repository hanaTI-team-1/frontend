import { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

function RecommendOption({ title, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-[400px] flex justify-center items-center mb-10">
      <div className="w-[100px] mr-5">
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <div className="w-[300px]">
        <Slider value={value} min={1} max={3} step={1} onChange={handleChange}>
          <SliderTrack bg="#D6E7FF">
            <SliderFilledTrack bg="#3388ff" />
          </SliderTrack>
          <SliderThumb boxSize={6} bg="#D4D4D8" />
        </Slider>
      </div>
    </div>
  );
}

export default function RecommendOpt() {
  const { gu, dong } = useParams();
  const navigate = useNavigate();

  const [price, setPrice] = useState();
  const [hanPrice, setHanPrice] = useState("");

  const [policeStationsValue, setPoliceStationsValue] = useState(1);
  const [groceriesValue, setGroceriesValue] = useState(1);
  const [schoolsValue, setSchoolsValue] = useState(1);
  const [busStationsValue, setBusStationsValue] = useState(1);
  const [subwayStationsValue, setSubwayStationsValue] = useState(1);

  const handlePoliceStationsChange = (newValue) => {
    setPoliceStationsValue(newValue);
  };

  const handleGroceriesChange = (newValue) => {
    setGroceriesValue(newValue);
  };

  const handleSchoolsChange = (newValue) => {
    setSchoolsValue(newValue);
  };

  const handleBusStationsChange = (newValue) => {
    setBusStationsValue(newValue);
  };

  const handleSubwayStationsChange = (newValue) => {
    setSubwayStationsValue(newValue);
  };

  const getKoreanNumber = (price) => {
    setPrice(price);
    let number = price;
    let result = "";
    const koreanUnits = [
      {
        kor: "조",
        num: 10000 * 10000,
      },
      {
        kor: "억",
        num: 10000,
      },
      {
        kor: "만",
        num: 1,
      },
    ];

    for (let i = 0; i < koreanUnits.length; i++) {
      if (number / koreanUnits[i].num >= 1) {
        result += Math.floor(number / koreanUnits[i].num) + koreanUnits[i].kor;
        number = Math.floor(number % koreanUnits[i].num);
      }
    }

    setHanPrice(result + "원");
  };
  return (
    <>
      <main className="min-h-full w-full flex justify-center bg-slate-50">
        <div className="pt-28 w-full max-w-[800px] flex flex-col items-center bg-white border shadow-md">
          <h1 className="text-center text-4xl font-semibold">
            <span className="font-black">예방AI</span>가 전세 매물을
            추천해줍니다
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-center break-keep">
            원하시는 금액과 인프라를 선택해주세요
          </p>
          <p className="text-md sm:text-xl text-center break-keep text-blue-400 font-semibold">
            {gu} {dong}
          </p>
          <div className="relative px-2 mt-10 w-full max-w-[650px]">
            <input
              type="number"
              id="price"
              value={price}
              name="price"
              autoComplete="off"
              onChange={(e) => {
                getKoreanNumber(e.target.value);
              }}
              placeholder="원하시는 금액을 입력해주세요"
              className="pl-3 sm:pl-10 w-full h-12 sm:h-20 border-2 rounded-lg md:rounded-full text-sm sm:text-xl shadow-lg focus:outline-none"
              step="10000"
              min="10000"
            />
            <span className="sm:w-40 sm:h-14 sm:aspect-square flex items-center justify-end absolute top-1/2 right-4 sm:right-7 transform -translate-y-1/2 rounded-lg md:rounded-full duration-150 text-xs">
              <span className="text-gray-400">{hanPrice}</span>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[800px] mt-10">
            <RecommendOption
              title="치안"
              defaultValue={policeStationsValue}
              onChange={handlePoliceStationsChange}
            />
            <RecommendOption
              title="마트"
              defaultValue={groceriesValue}
              onChange={handleGroceriesChange}
            />
            <RecommendOption
              title="학교"
              defaultValue={schoolsValue}
              onChange={handleSchoolsChange}
            />
            <RecommendOption
              title="버스"
              defaultValue={busStationsValue}
              onChange={handleBusStationsChange}
            />
            <RecommendOption
              title="지하철"
              defaultValue={subwayStationsValue}
              onChange={handleSubwayStationsChange}
            />
          </div>
          <div className="w-[80%] text-center">
            <div
              className="rounded-lg bg-blue-400 mt-4 pl-20 pr-20 pt-4 pb-4 text-xl text-black cursor-pointer hover:bg-blue-200 hover:rounded-none duration-300"
              onClick={() => {
                navigate(
                  `/recommend/${gu}/${dong}/list?price=${price}&policeStation=${policeStationsValue}&groceries=${groceriesValue}&schools=${schoolsValue}&busStations=${busStationsValue}&subwayStations=${subwayStationsValue}`
                );
              }}
            >
              추천 받기
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
