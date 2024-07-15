import { FaHouseMedical } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
      <FaHouseMedical size={32} className="text-blue-400" />
      <span className="font-bold text-lg tracking-wide text-neutral-700">
        예방
      </span>
    </Link>
  );
};
