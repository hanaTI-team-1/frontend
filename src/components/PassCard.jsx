import { RiHome2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";

export default function PassCard({ check }) {
  return (
    <div className="flex justify-center items-center w-48 h-48 bg-slate-300 relative rounded-xl">
      {check.result === 1 ? (
        <GreenCheck />
      ) : check.result === 2 ? (
        <OrangeTriangle />
      ) : (
        <RedX />
      )}
      <div className="flex flex-col items-center">
        {check.title === "적정전세가" ? (
          <RiHome2Fill size="75" />
        ) : check.title === "전세가율" ? (
          <IoBarChartSharp size="75" />
        ) : check.title === "건축물대장" ? (
          <FaBook size="75" />
        ) : check.title === "공인중개사" ? (
          <PiCertificateFill size="75" />
        ) : check.title === "등기부등본" ? (
          <IoIosPaper size="75" />
        ) : (
          <FaHouseCircleCheck size="75" />
        )}
        <div className="text-md font-bold">{check.title}</div>
        <div className="text-[0.6rem] text-slate-500">{check.content}</div>
        <div
          className="w-36 text-sm font-bold text-center bg-slate-400 pt-1 pb-1 rounded-lg mt-2 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: check.scroll, behavior: "smooth" });
          }}
        >
          {check.btn}
        </div>
      </div>
    </div>
  );
}

export function GreenCheck() {
  return (
    <div className="bg-green-400 w-10 h-10 flex items-center justify-center rounded-full absolute top-2 right-2">
      <FaCheck size="25" />
    </div>
  );
}

function OrangeTriangle() {
  return (
    <div className="bg-orange-400 w-10 h-10 flex items-center justify-center rounded-full absolute top-2 right-2">
      <FaMagnifyingGlass size="25" />
    </div>
  );
}

function RedX() {
  return (
    <div className="bg-red-400 w-10 h-10 flex items-center justify-center rounded-full absolute top-2 right-2">
      <FaExclamation size="30" />
    </div>
  );
}
