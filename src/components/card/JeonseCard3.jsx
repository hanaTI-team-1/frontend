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

export const JeonseCard3 = ({ info, isDetail, onClick, setDetail }) => {
  const jeonse = info.jeonse;
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const infraInfo = isDetail
    ? info.appropriateJeonsePrice.infrastructureNum
    : "";

  const handleOpen = () => {
    if (!isDetail) setDetail(true);
    onOpen();
    if (onClick) onClick(); // onClick 이벤트 핸들러 호출
  };

  const makeHanPrc = (prc) => {
    let hanPrc = "";
    if (prc >= 10000) {
      hanPrc = parseInt(prc / 10000) + "억";
      prc -= parseInt(prc / 10000) * 10000;
    }
    if (prc > 0) {
      hanPrc += " " + (prc % 10000) + "만원";
    } else {
      hanPrc += "원";
    }

    return hanPrc;
  };

  return (
    <>
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
            <span className="text-2xl font-bold">{jeonse.address}</span>
            <span className="font-medium text-lg">
              {makeHanPrc(jeonse.prc)}
            </span>
            <span className="opacity-70">
              {jeonse.atclNm} {jeonse.spc2 + "평"}
            </span>
          </hgroup>
          <div className="transition duration-300 group-hover:translate-x-2 h-full flex items-center">
            <IoIosArrowDroprightCircle
              size={48}
              className="duration-300 text-gray-500 group-hover:text-blue-400"
            />
          </div>
        </div>
        {isDetail ? (
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
                <RoadMap lat={jeonse.lat} lng={jeonse.lng} />
                <div>
                  <div className="pt-3 pb-2 flex items-center gap-2 w-full text-lg font-medium">
                    <FaMapMarkerAlt className="text-blue-400" />
                    {jeonse.address}
                  </div>
                  <ul className="border rounded">
                    <li className="grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        특징
                      </span>
                      <span className="py-2 col-span-8 text-sm">
                        {jeonse.atclFetrDesc}
                      </span>
                    </li>
                    <li className="border-t grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        방향
                      </span>
                      <span className="py-2 col-span-8">
                        {jeonse.direction}
                      </span>
                    </li>
                    <li className="border-t grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        가격
                      </span>
                      <span className="py-2 col-span-8">
                        {makeHanPrc(jeonse.prc)}
                      </span>
                    </li>
                    <li className="border-t grid grid-cols-10 gap-2">
                      <span className="p-2 col-span-2 text-right bg-slate-100">
                        주거형태
                      </span>
                      <span className="py-2 col-span-8">{jeonse.rletTpNm}</span>
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
                <div className="pt-3 pb-2 flex items-center gap-2 w-full text-lg font-semibold">
                  인프라 정보{" "}
                  <span className="pl-2 text-gray-400 text-sm">
                    반경 500m 기준
                  </span>
                </div>
                <div className="flex">
                  <div className="flex items-center" style={{ flex: 1 }}>
                    <img
                      src="/infra/subway.png"
                      className="w-[50px] h-[50px] pt-2 pb-2 scale-150"
                    />
                    <p className="pl-5 text-blue-500 font-bold text-md">
                      지하철{" "}
                      {Math.round(infraInfo.subway * 1000) > 500
                        ? Math.round(infraInfo.subway * 1000) + "m"
                        : "0개"}
                    </p>
                  </div>
                  <div className="flex items-center" style={{ flex: 1 }}>
                    <img
                      src="/infra/bus.png"
                      className="w-[50px] h-[50px] pl-1 pr-1"
                    />
                    <p className="pl-5 text-blue-500 font-bold text-md">
                      버스정류장 {infraInfo.busStop}개
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center" style={{ flex: 1 }}>
                    <img src="/infra/school.png" className="w-[50px]" />
                    <p className="pl-5 text-blue-500 font-bold text-md">
                      학교 {infraInfo.school}개
                    </p>
                  </div>
                  <div className="flex items-center" style={{ flex: 1 }}>
                    <img src="/infra/police.png" className="w-[50px]" />
                    <p className="pl-5 text-blue-500 font-bold text-md">
                      경찰서 {infraInfo.publicSecurity}개
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center">
                    <img src="/infra/mart.png" className="w-[50px]" />
                    <p className="pl-5 text-blue-500 font-bold text-md">
                      마트 {infraInfo.mart}개
                    </p>
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <></>
        )}
      </li>
    </>
  );
};
``;
