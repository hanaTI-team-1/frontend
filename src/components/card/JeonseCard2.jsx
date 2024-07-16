import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const JeonseCard2 = ({ info }) => {
  console.log(info);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <li
      className="w-full h-36 py-5 px-10 flex gap-10 rounded-xl shadow-lg bg-slate-50 border"
      ref={btnRef}
      onClick={onOpen}
    >
      <div className="h-full w-24 flex items-center justify-center bg-rose-300">
        <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-gray-100">
          <MdApartment className="text-blue-400" size={48} />
        </div>
      </div>
      <hgroup className="flex flex-col">
        <span className="text-2xl font-bold">{info.atclNm}</span>
        <span className="font-medium text-lg">{info.hanPrc}원</span>
        <span className="opacity-70">{info.spc2 + "평"}</span>
      </hgroup>
      {/* <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-20 w-20 flex items-center justify-center bg-slate-200 rounded-lg">
            <MdApartment size={48} />
          </div>
          <div className="ml-5 flex flex-col">
            <span className="font-bold text-lg">{protect.address}</span>
            <span className="text-xs opacity-40">
              {protect.atclNm + " " + protect.spc2 + "평"}
            </span>
            <span className="font-bold text-lg">{protect.hanPrc}원</span>
          </div>
        </div>
        <div className="mr-5">
          <IoIosArrowDroprightCircle size={48} className="text-gray-500" />
        </div>
      </div> */}
    </li>
  );
};
