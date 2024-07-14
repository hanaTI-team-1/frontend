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
import React from "react";
import KakaoMap from "./KakaoMap";
import JeonseInfo from "./JeonseInfo";
import { useNavigate, useParams } from "react-router-dom";

export const JeonseCard = ({ protect, isProtect }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  console.log();
  return (
    <>
      <li
        className="w-[650px] gap-4 p-2 border-2 border-blue-500 shadow-lg cursor-pointer rounded-lg ml-auto mr-auto mb-10"
        ref={btnRef}
        onClick={onOpen}
      >
        <div className="flex justify-between items-center">
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
        </div>
      </li>
      {isProtect ? (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader />
            <DrawerBody>
              <div className="text-3xl font-bold mt-7 mb-5">
                {protect.address}
              </div>
              <KakaoMap
                lat={protect.lat}
                lng={protect.lng}
                atclNm={protect.atclNm}
              />
              <JeonseInfo protect={protect} />
              <div
                className="bg-slate-300 w-52 text-center pt-4 pb-4 rounded-lg cursor-pointer font-bold ml-auto mr-auto mb-8 mt-20 text-xl"
                onClick={() => {
                  navigate("/protect/" + id + "/result/" + protect.atclNo);
                  onClose();
                }}
              >
                예방 결과 보기
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : (
        <> </>
      )}
    </>
  );
};
