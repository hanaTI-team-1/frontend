import { FaHouseMedical } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to={"/"}
      className="w-24 sm:w-32 lg:w-48 flex items-center gap-2 cursor-pointer"
    >
      <img src="/icons/house.png" width={32} height={32} alt="logo" />
      <span className="font-bold text-lg tracking-wide text-neutral-700">
        예방
      </span>
    </Link>
  );
};
