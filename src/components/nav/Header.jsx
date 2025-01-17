import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { Logo } from "../Logo";
import { DrawerMenu } from "./DrawerMenu";

export const Header = () => {
  return (
    <header className="fixed z-20 top-0 pl-7 pr-5 lg:px-20 xl:px-[10%] h-16 w-full flex items-center justify-between border-b shadow-lg bg-white">
      <Logo />
      <DrawerMenu />
      <nav className="hidden sm:flex gap-2">
        {/* 클릭하면 /proctect로 이동 */}
        <Link
          to={"/protect"}
          className="py-2 rounded-lg bg-blue-300 text-center w-24 sm:w-32 lg:w-48 cursor-pointer hover:bg-blue-200 hover:rounded-none duration-300"
        >
          전세사기예방
        </Link>
        {/* 클릭하면 /로 이동 */}
        <Link
          to={"/recommend"}
          className="py-2 h-10 rounded-lg bg-blue-400 text-center w-24 sm:w-32 lg:w-48 cursor-pointer hover:bg-blue-200 hover:rounded-none duration-300"
        >
          전세추천
        </Link>
      </nav>

      <Link
        to={"/insight"}
        className="py-2 h-10 rounded-lg bg-slate-300 text-center w-24 sm:w-32 lg:w-48 cursor-pointer hover:bg-slate-300 hover:rounded-none duration-300"
      >
        예방레포트
      </Link>
    </header>
  );
};
