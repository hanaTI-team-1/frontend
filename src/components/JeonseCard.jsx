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
import React from "react";
import KakaoMap from "./KakaoMap";

export const JeonseCard = ({ protect }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <li
        className="w-[650px] gap-4 p-2 border shadow-lg cursor-pointer rounded-lg ml-auto mr-auto mb-10"
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

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <div className="flex justify-end">
              <div
                className="rounded-full bg-red-600 w-7 h-7 text-center text-white"
                onClick={() => {
                  onClose();
                }}
              ></div>
            </div>

            {/* <Button variant="solid" colorScheme="red" mr={3} onClick={onClose}>
              X
            </Button> */}
          </DrawerHeader>

          <DrawerBody>
            <KakaoMap
              lat={protect.lat}
              lng={protect.lng}
              atclNm={protect.atclNm}
            />
          </DrawerBody>

          <DrawerFooter>
            {" "}
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
