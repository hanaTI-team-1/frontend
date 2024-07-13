import { useNavigate } from "react-router-dom";

export default function JusoBox({ result }) {
  const navigate = useNavigate();

  const splitJibunAddr = (jibunAddr, bdNm) => {
    const tempAddr = jibunAddr.replace(` ${bdNm}`, "");
    return tempAddr;
  };

  return (
    <>
      <div
        className="bg-gray-100 w-[650px] rounded-lg pt-6 pb-6 pl-4 pr-4 ml-auto mr-auto mt-5 mb-5 cursor-pointer animate__animated animate__fadeIn"
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
