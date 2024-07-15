import axios from "axios";
import { LuSyringe } from "react-icons/lu";
import { useState } from "react";
import "animate.css";
import AddressCard from "../components/card/AddressCard";
import { AddressCardSkeleton } from "../components/card/AddressCardSkeleton";

export default function Protect() {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const address = e.target[0].value;
    if (address == "") {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const result = await axios.get(
      `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDI0MDcxMDE2MDc0NjExNDkxMTY=&currentPage=1&countPerPage=100&keyword=${address}&resultType=json`
    );
    if (result.status != 200 || result.data.results.juso == null) return;
    console.log(result.data.results.juso.filter((item) => item.bdNm != ""));
    setSearchResults(
      result.data.results.juso.filter((item) => item.bdNm != "")
    );
    setIsSearching(false);
  };
  return (
    <main className="min-h-full pt-24 sm:pt-36 px-5 flex flex-col items-center bg-gradient-to-tr ">
      <hgroup>
        <h1 className="text-2xl sm:text-4xl text-center font-bold sm:font-medium break-keep">
          찾으시는 전세 매물이 있으신가요?
        </h1>
        <p className="mt-5 text-sm sm:text-lg text-center break-keep">
          예방은
          <strong className="text-blue-400 text-3xl tracking-wide">
            {" "}
            24,324
          </strong>
          개<br className="block sm:hidden" /> 의 전세 매물을 보호하고 있습니다.
        </p>
      </hgroup>
      <div className="relative mt-10 sm:mt-20 w-full max-w-[650px]">
        <form onSubmit={handleSearch}>
          <input
            id="address"
            name="address"
            placeholder="검사하고 싶은 매물의 주소를 입력해주세요"
            className="pl-3 sm:pl-10 w-full h-12 sm:h-20 border-2 rounded-lg md:rounded-full text-sm sm:text-xl shadow-lg focus:outline-none"
          />
          <button
            type="submit"
            className="h-8 w-10 sm:w-auto sm:h-14 sm:aspect-square flex items-center justify-center absolute top-1/2 right-1 sm:right-3 transform -translate-y-1/2 cursor-pointer rounded-lg md:rounded-full  bg-blue-100 text-blue-500 hover:bg-blue-200 hover:opacity-60 duration-150 shadow-md"
          >
            <LuSyringe className="text-2xl" />
          </button>
        </form>
      </div>
      <div className="mt-5 w-full max-w-[600px] flex flex-col">
        <div className="w-full border-[0.5px] mb-5" />
        <ul className="p-5 w-full space-y-5 h-[450px] overflow-y-auto">
          {isSearching ? (
            <>
              <AddressCardSkeleton />
              <AddressCardSkeleton />
            </>
          ) : (
            searchResults.map((item, idx) => (
              <AddressCard key={idx} result={item} />
            ))
          )}
          {!isSearching && searchResults.length == 0 && (
            <p className="text-center opacity-70">검색된 결과가 없습니다.</p>
          )}
        </ul>
      </div>
    </main>
  );
}
