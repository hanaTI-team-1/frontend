import axios from "axios";
import { LuSyringe } from "react-icons/lu";
import { useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import "animate.css";

export default function Protect() {
  const [address, setAddress] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getAddressInfo = async (address) => {
    axios
      .get(
        `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDI0MDcxMDE2MDc0NjExNDkxMTY=&currentPage=1&countPerPage=100&keyword=${address}&resultType=json`
      )
      .then((res) => {
        // console.log(res.data.results.juso);
        setSearchResults(res.data.results.juso);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div className="min-h-[475px] flex flex-col justify-end mb-36">
        <div className="text-center animate__animated animate__fadeInUp">
          <div className="text-4xl">찾으시는 전세 매물이 있나요?</div>
          <div>
            예방은 <span className="text-2xl font-bold">8만건</span>의 전세
            매물을 보호하고 있어요
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 relative animate__animated animate__fadeInUp">
          <div className="relative w-[650px]">
            <input
              type="text"
              placeholder="검색하고 싶은 매물의 주소를 입력해주세요"
              className="border-2 w-full h-20 rounded-full px-2 pl-5 text-xl pr-16"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <div
              className="absolute top-1/2 transform -translate-y-1/2 right-4 p-3 shadow-md shadow-slate-600 cursor-pointer rounded-full bg-white"
              onClick={() => {
                getAddressInfo(address);
              }}
            >
              <LuSyringe size={35} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {searchResults.map((result, index) => {
          return <JusoBox key={index} result={result} />;
        })}
      </div>
    </>
  );
}

function JusoBox({ result }) {
  const navigate = useNavigate();

  const splitJibunAddr = (jibunAddr, bdNm) => {
    const tempAddr = jibunAddr.replace(` ${bdNm}`, "");
    return tempAddr;
  };

  return (
    <>
      <div
        className="bg-gray-100 w-[650px] rounded-lg pt-6 pb-6 pl-4 pr-4 ml-auto mr-auto mt-5 mb-5 cursor-pointer animate__animated animate__pulse"
        onClick={() => {
          navigate(
            "/protect/" +
              splitJibunAddr(result.jibunAddr, result.bdNm) +
              "+" +
              result.bdNm
          );
        }}
      >
        <div className="flex items-center mb-5">
          <div className="bg-sky-200 text-blue-600 pl-1 pr-1 pt-1 pb-1 rounded-lg font-bold">
            도로명
          </div>
          <div className="pl-3 text-gray-400">{result.roadAddr}</div>
        </div>
        <div className="flex items-center mt-5">
          <div className="bg-gray-300 pl-1 pr-1 pt-1 pb-1 rounded-lg font-bold">
            구주소
          </div>
          <div className="pl-3 text-gray-400">{result.jibunAddr}</div>
        </div>
      </div>
    </>
  );
}
