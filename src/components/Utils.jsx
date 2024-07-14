import { FaCheck, FaExclamation } from "react-icons/fa6";

function GreenCheck() {
  return (
    <div className="bg-green-400 w-8 h-8 flex items-center justify-center rounded-full">
      <FaCheck size="17" />
    </div>
  );
}

function GrayCheck() {
  return (
    <div className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full">
      <FaCheck size="17" />
    </div>
  );
}

function CheckTrueBtn() {
  return (
    <div className="mt-5 cursor-pointer">
      <div className="w-full bg-green-400 h-14 rounded-2xl flex items-center">
        <div className="ml-2 w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <FaCheck size="25" />
        </div>
        <div className="font-bold text-lg text-center pr-3" style={{ flex: 1 }}>
          안전합니다
        </div>
      </div>
    </div>
  );
}
function CheckFalseBtn() {
  return (
    <div className="mt-5 cursor-pointer">
      <div className="w-full bg-red-400 h-14 rounded-2xl flex items-center">
        <div className="ml-2 w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <FaExclamation size="30" />
        </div>
        <div className="font-bold text-lg text-center pr-3" style={{ flex: 1 }}>
          확인이 필요합니다
        </div>
      </div>
    </div>
  );
}

function CheckBtn({ title, check }) {
  return (
    <div className="w-[275px]">
      <div className="text-lg font-bold">{title}</div>
      <div className="bg-slate-500 w-64 h-64 mt-5 mx-auto"></div>
      {check ? <CheckTrueBtn /> : <CheckFalseBtn />}
    </div>
  );
}

export { GreenCheck, GrayCheck, CheckTrueBtn, CheckFalseBtn, CheckBtn };
