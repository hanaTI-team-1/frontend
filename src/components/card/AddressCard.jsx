import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

export default function AddressCard({
  address,
  road_address,
  atclNm,
  building_name,
}) {
  return (
    <li>
      <Link
        to={`/protect/${address}?bdNm=${atclNm}`}
        className="h-[6.5rem] px-4 w-full flex justify-between bg-gray-100 hover:bg-gray-200 duration-200 group rounded-lg cursor-pointer"
      >
        <div className="h-full flex flex-col justify-evenly">
          <div className="flex items-center">
            <span className="p-1 bg-sky-200 text-blue-600 rounded-lg font-bold text-xs">
              도로명
            </span>
            <div className="pl-3 text-xs sm:text-sm text-neutral-700">
              {road_address} {building_name}
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
        <div className="hidden sm:flex h-full items-center group-hover:translate-x-2 duration-300">
          <FaAngleRight
            size={32}
            className="duration-300 text-gray-500 group-hover:text-blue-400"
          />
        </div>
      </Link>
    </li>
  );
}
