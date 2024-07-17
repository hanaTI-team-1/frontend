import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import { Link } from "react-router-dom";
import KakaoMap from "../KakaoMap";
import { useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
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
import RoadMap from "../map/RoadMap";

export const JeonseCard3 = ({ info, isDetail, onClick }) => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const infraInfo = isDetail
    ? info.appropriateJeonsePrice.infrastructureNum
    : "";

  const handleOpen = () => {
    onOpen();
    if (onClick) onClick(); // onClick 이벤트 핸들러 호출
  };
  return (
    <>
      {isDetail ? (
        <li
          className="w-full h-32 py-5 px-10 flex justify-between shadow-lg bg-gray-100 hover:bg-gray-200 duration-200 rounded-md group cursor-pointer"
          ref={btnRef}
          onClick={handleOpen}
        >
          <div className="flex gap-10">
            <div className="h-full w-24 flex items-center justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-white shadow-sm">
                <MdApartment className="text-blue-400" size={48} />
              </div>
            </div>
            <hgroup className="flex flex-col gap-1">
              <span className="text-2xl font-bold">{info.jeonse.address}</span>
              <span className="font-medium text-lg">{info.jeonse.hanPrc}</span>
              <span className="opacity-70">
                {info.jeonse.atclNm} {info.jeonse.spc2 + "평"}
              </span>
            </hgroup>
          </div>
          <div className="transition duration-300 group-hover:translate-x-2 h-full flex items-center">
            <IoIosArrowDroprightCircle
              size={48}
              className="duration-300 text-gray-500 group-hover:text-blue-400"
            />
          </div>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size={"md"}
          >
            <DrawerOverlay sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>전세 상세 정보</DrawerHeader>

              <DrawerBody>
                {/* <KakaoMap lat={info.lat} lng={info.lng} atclNm={info.atclNm} /> */}
                <RoadMap lat={info.jeonse.lat} lng={info.jeonse.lng} />
                <div>
                  <div className="pt-3 pb-2 flex items-center gap-2 w-full text-lg font-medium">
                    <FaMapMarkerAlt className="text-blue-400" />
                    {info.jeonse.address}
                  </div>
                  <ul className="border rounded">
                    <li className="grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        특징
                      </span>
                      <span className="py-2 col-span-8 text-sm">
                        {info.jeonse.atclFetrDesc}
                      </span>
                    </li>
                    <li className="border-t grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        방향
                      </span>
                      <span className="py-2 col-span-8">
                        {info.jeonse.direction}
                      </span>
                    </li>
                    <li className="border-t grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        가격
                      </span>
                      <span className="py-2 col-span-8">
                        {info.jeonse.hanPrc}
                      </span>
                    </li>
                    <li className="border-t grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        주거형태
                      </span>
                      <span className="py-2 col-span-8">
                        {info.jeonse.rletTpNm}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2 text-sm opacity-70 flex items-center justify-end gap-2">
                  네이버 부동산 정보
                  <img
                    src="/icons/seoul-city.svg"
                    width={16}
                    height={16}
                    alt="seoul"
                  />
                </div>
                <div className="pt-3 pb-2 flex items-center gap-2 w-full text-lg font-medium">
                  인프라 정보
                </div>
                <div>{infraInfo.busStop}</div>
                <div>{infraInfo.mart}</div>
                <div>{infraInfo.publicSecurity}</div>
                <div>{infraInfo.school}</div>
                <div>{infraInfo.subway}</div>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </li>
      ) : (
        <li
          className="w-full h-32 py-5 px-10 flex justify-between shadow-lg bg-gray-100 hover:bg-gray-200 duration-200 rounded-md group cursor-pointer"
          ref={btnRef}
        >
          <div className="flex gap-10">
            <div className="h-full w-24 flex items-center justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-white shadow-sm">
                <MdApartment className="text-blue-400" size={48} />
              </div>
            </div>
            <hgroup className="flex flex-col gap-1">
              <span className="text-2xl font-bold">{info.address}</span>
              <span className="font-medium text-lg">{info.hanPrc}원</span>
              <span className="opacity-70">
                {info.atclNm} {info.spc2 + "평"}
              </span>
            </hgroup>
          </div>
        </li>
      )}
    </>
  );
};
