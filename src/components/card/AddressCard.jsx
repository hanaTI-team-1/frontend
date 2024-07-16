import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

export default function AddressCard({ address, buildingName }) {
  if (!address || !buildingName) return null;

  return (
    <li>
      <Link
        to={`/protect/${address}?bdNm=${buildingName}`}
        className="h-[6.5rem] px-4 w-full flex justify-between bg-gray-100 hover:bg-gray-200 duration-200 rounded-lg cursor-pointer"
      >
        <div className="h-full flex flex-col justify-evenly">
          <div className="flex items-center">
            <span className="p-1 bg-sky-200 text-blue-600 rounded-lg font-bold text-xs">
              도로명
            </span>
            <div className="pl-3 text-xs sm:text-sm text-neutral-700">
              히히 아직 없음
            </div>
          </div>
          <div className="flex items-center">
            <span className="p-1 bg-gray-300 rounded-lg font-bold text-xs">
              구주소
            </span>
            <div className="pl-3 text-xs sm:text-sm text-gray-400">
              {address}
            </div>
          </div>
        </div>
        <div className="hidden sm:flex h-full items-center">
          <FaAngleRight size={32} className="opacity-60" />
        </div>
      </Link>
    </li>
  );
}
