import axios from "axios";
import { useState } from "react";
import { Header } from "./Header";
import "animate.css";
import { FaSchool } from "react-icons/fa6";
import { MdLocalPolice } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaSubway } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export default function RecommendOpt() {
  const { address } = useParams();
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [school, setSchool] = useState(false);
  const [chiAn, setChiAn] = useState(false);
  const [gs25, setGs25] = useState(false);
  const [bus, setBus] = useState(false);
  const [subway, setSubway] = useState(false);
  const [mart, setMart] = useState(false);

  function getKoreanNumber(number) {
    const koreanUnits = ["조", "억", "만", ""];
    const unit = 10000;
    let answer = "";

    while (number > 0) {
      const mod = number % unit;
      const modToString = mod.toString().replace(/(\d)(\d{3})/, "$1,$2");
      number = Math.floor(number / unit);
      answer = `${modToString}${koreanUnits.pop()}${answer}`;
    }
    return answer;
  }

  return (
    <>
      <Header />
      <div className="min-h-[475px] flex flex-col justify-end mb-7">
        <div className="text-center animate__animated animate__fadeInUp">
          <div className="text-4xl">
            <span className="font-bold">예방AI</span>가 매물을 추천드립니다.
          </div>
          <div className="mt-2 font-semibold font-md text-xl">
            원하시는 금액과 인프라를 입력해주세요
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 relative animate__animated animate__fadeInUp">
          <div className="relative w-[650px]">
            <input
              type="text"
              placeholder="금액을 입력해주세요"
              className="border-2 w-full h-20 rounded-full px-2 pl-7 text-xl pr-16 shadow-md shadow-slate-300"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 p-3 shadow-mdcursor-pointer bg-white text-gray-500">
              {getKoreanNumber(price)}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[650px] mx-auto pl-5 text-2xl mb-8 flex items-center animate__animated animate__fadeInUp">
        <div className="w-5 h-5 rounded-full bg-slate-500"></div>
        <div className="pl-5">{address.split("+")[0]}</div>
      </div>
      <div className="w-[650px] flex justify-evenly mx-auto animate__animated animate__fadeInUp">
        <div
          onClick={() => {
            setSchool(!school);
          }}
        >
          <InfraBtn title={"학교"} isChecked={school} />
        </div>
        <div
          onClick={() => {
            setChiAn(!chiAn);
          }}
        >
          <InfraBtn title={"치안"} isChecked={chiAn} />
        </div>
        <div
          onClick={() => {
            setGs25(!gs25);
          }}
        >
          <InfraBtn title={"편의점"} isChecked={gs25} />
        </div>
        <div
          onClick={() => {
            setMart(!mart);
          }}
        >
          <InfraBtn title={"마트"} isChecked={mart} />
        </div>
        <div
          onClick={() => {
            setSubway(!subway);
          }}
        >
          <InfraBtn title={"지하철"} isChecked={subway} />
        </div>
        <div
          onClick={() => {
            setBus(!bus);
          }}
        >
          <InfraBtn title={"버스"} isChecked={bus} />
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div
          className="pl-3 pr-3 bg-gray-400 w-32 h-10 rounded-xl flex justify-center items-center text-white cursor-pointer"
          onClick={() => {
            navigate(
              `/recommend/${address}/${price}+${school}+${chiAn}+${gs25}+${mart}+${subway}+${bus}`
            );
          }}
        >
          추천받기
        </div>
      </div>
    </>
  );
}

function InfraBtn({ title, isChecked }) {
  return isChecked ? (
    <CheckedInfraBtn title={title} />
  ) : (
    <UnCheckedInfraBtn title={title} />
  );
}

function UnCheckedInfraBtn({ title }) {
  return (
    <div className="shadow-lg w-24 h-12 rounded-2xl border-blue-200 border-2 flex items-center cursor-pointer">
      <div className="ml-2 mr-1">
        {
          {
            학교: <FaSchool size="25" />,
            치안: <MdLocalPolice size="25" />,
            편의점: <HiBuildingStorefront size="25" />,
            마트: <MdLocalGroceryStore size="25" />,
            지하철: <FaSubway size="25" />,
            버스: <FaBus size="25" />,
          }[title]
        }
      </div>
      <div className="leading-4 w-full text-center">{title}</div>
    </div>
  );
}
function CheckedInfraBtn({ title }) {
  return (
    <div className="shadow-lg w-24 h-12 rounded-2xl bg-blue-100 border-blue-200 border-2 flex items-center cursor-pointer">
      <div className="ml-2 mr-1">
        {
          {
            학교: <FaSchool size="25" />,
            치안: <MdLocalPolice size="25" />,
            편의점: <HiBuildingStorefront size="25" />,
            마트: <MdLocalGroceryStore size="25" />,
            지하철: <FaSubway size="25" />,
            버스: <FaBus size="25" />,
          }[title]
        }
      </div>
      <div className="leading-4 w-full text-center">{title}</div>
    </div>
  );
}
