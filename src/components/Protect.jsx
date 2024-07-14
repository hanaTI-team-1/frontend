import axios from "axios";
import { LuSyringe } from "react-icons/lu";
import { useState } from "react";
import { Header } from "./Header";
import "animate.css";
import JusoBox from "./JusoBox";

export default function Protect() {
  const [address, setAddress] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getAddressInfo = async (address) => {
    axios
      .get(
        `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDI0MDcxMDE2MDc0NjExNDkxMTY=&currentPage=1&countPerPage=100&keyword=${address}&resultType=json`
      )
      .then((res) => {
        console.log(res.data.results.juso);
        setSearchResults(res.data.results.juso);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div className="min-h-[475px] flex flex-col justify-end mb-28">
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
              className="border-2 w-full h-20 rounded-full px-2 pl-7 text-xl pr-16 shadow-md shadow-slate-300"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <div
              className="absolute top-1/2 transform -translate-y-1/2 right-4 p-3 shadow-md shadow-slate-300 cursor-pointer rounded-full bg-white"
              onClick={() => {
                getAddressInfo(address);
              }}
            >
              <LuSyringe size={35} />
            </div>
          </div>
        </div>
        <div className="text-center mt-5 font-bold text-gray-400">
          검색 결과가 없다면 더 자세한 주소를 입력해주세요
        </div>
      </div>
      <div>
        {searchResults.map((result, index) => {
          return result.bdNm === "" ? (
            <></>
          ) : (
            <JusoBox key={index} result={result} />
          );
        })}
      </div>
    </>
  );
}
