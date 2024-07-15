import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-50 ">
      <div className="max-w-[1920px] xl:px-40 flex w-full h-14 items-center drop-shadow-xl mx-auto">
        <Logo />
        <nav className="flex justify-center" style={{ flex: 3 }}>
          {/* 클릭하면 /proctect로 이동 */}
          <Link
            to={"/protect"}
            className="h-10 leading-10 rounded-lg bg-gray-500 text-center w-48 cursor-pointer hover:bg-gray-600 hover:rounded-full duration-150"
          >
            전세사기예방
          </Link>
          {/* 클릭하면 /로 이동 */}
          <Link
            to={"/recommend"}
            className="h-10 leading-10 rounded-lg bg-gray-200 text-center w-48 cursor-pointer hover:bg-gray-300 hover:rounded-full duration-150"
          >
            전세추천
          </Link>
        </nav>
        <div className="text-right" style={{ flex: 1 }}>
          <span className="rounded-lg pl-14 pr-14 pt-2 pb-2 bg-slate-300 cursor-pointer">
            예방레포트
          </span>
        </div>
      </div>
    </header>
  );
};
