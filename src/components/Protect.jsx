import axios from "axios";
import { LuSyringe } from "react-icons/lu";

export default function Protect() {
  return (
    <>
      <JusoSearch />
    </>
  );
}

function JusoSearch() {
  const getAddressInfo = async () => {
    axios
      .get(
        `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDI0MDcxMDE2MDc0NjExNDkxMTY=&currentPage=1&countPerPage=100&keyword=${address}&resultType=json`
      )
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex">
        <input
          type=""
          placeholder="검색하고 싶은 매물의 주소를 입력해주세요"
          className="border-2 border-gray-300 w-96 h-10 rounded-lg px-2"
        />
      </div>
    </>
  );
}
