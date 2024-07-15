import { Link } from "react-router-dom";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="fixed top-0 px-2 sm:px-10 lg:px-20 h-16 w-full flex items-center justify-between border-b shadow-lg bg-white">
      <Logo />
      <nav className="flex gap-2">
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

      <span className="py-2 h-10 bg-zinc-300 text-center w-24 sm:w-32 lg:w-48 cursor-pointer">
        예방레포트
      </span>
    </header>
  );
};
