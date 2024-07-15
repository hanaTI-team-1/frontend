import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { FaCheckCircle, FaRobot } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

export const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="block sm:hidden aspect-square p-2 rounded-lg bg-neutral-50"
      >
        <RiMenu3Fill size={28} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>메뉴</DrawerHeader>

          <DrawerBody>
            <ul className="pt-2 space-y-7">
              <li>
                <Link
                  to={"/protect"}
                  className="px-4 py-3 rounded-lg flex items-center gap-4 bg-slate-100"
                >
                  <FaCheckCircle size={24} className="text-green-500" />
                  <span className="text-lg font-medium">전세 상품 체크</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/recommend"}
                  className="px-4 py-3 rounded-lg flex items-center gap-4 bg-slate-100"
                >
                  <FaRobot size={24} className="text-blue-500" />
                  <span className="text-lg font-medium">전세 추천 받기</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/report"}
                  className="px-4 py-3 rounded-lg flex items-center gap-4 bg-slate-100"
                >
                  <FaNewspaper size={21} className="text-neutral-600" />
                  <span className="text-lg font-medium">전세 예방 리포트</span>
                </Link>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
