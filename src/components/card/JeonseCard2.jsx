import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import KakaoMap from "../KakaoMap";
import { useRef } from "react";

export const JeonseCard2 = ({ info, url }) => {
  console.log(info);
  console.log(info.address);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <li
      className="w-full h-32 py-5 px-10 flex justify-between rounded-xl shadow-lg bg-slate-50 border hover:bg-slate-100 duration-200 cursor-pointer"
      ref={btnRef}
      onClick={onOpen}
    >
      <div className="flex gap-10">
        <div className="h-full w-24 flex items-center justify-center">
          <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-gray-200">
            <MdApartment className="text-blue-400" size={48} />
          </div>
        </div>
        <hgroup className="flex flex-col gap-1">
          <span className="text-2xl font-bold">
            {info.atclNm} {info.bildNm}
          </span>
          <span className="font-medium text-lg">{info.hanPrc}원</span>
          <span className="opacity-70">{info.spc2 + "평"}</span>
        </hgroup>
      </div>
      <div className="h-full flex items-center">
        <IoIosArrowDroprightCircle size={48} className="text-gray-500" />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>전세 상세 정보</DrawerHeader>

          <DrawerBody>
            <KakaoMap lat={info.lat} lng={info.lng} atclNm={info.atclNm} />
            <div>
              <span className="text-lg">{info.address}</span>
              <ul className="mt-5 space-y-1">
                <li className="grid grid-cols-10 gap-2">
                  <span className="col-span-2 text-right">특징</span>
                  <span className="col-span-8">{info.atclFetrDesc}</span>
                </li>
                <li className="grid grid-cols-10 gap-2">
                  <span className="col-span-2 text-right">방향</span>
                  <span className="col-span-8">{info.direction}</span>
                </li>
                <li className="grid grid-cols-10 gap-2">
                  <span className="col-span-2 text-right">가격</span>
                  <span className="col-span-8">{info.hanPrc}</span>
                </li>
                <li className="grid grid-cols-10 gap-2">
                  <span className="col-span-2 text-right">주거형태</span>
                  <span className="col-span-8">{info.rletTpNm}</span>
                </li>
              </ul>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Link to={url} className="w-full">
              <Button className="w-full py-10">예방 결과 보러가기</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </li>
  );
};
