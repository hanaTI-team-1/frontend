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

export const JeonseCard = ({ address1, address2, price }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <li
        className="flex w-[650px] gap-4 p-2 border shadow-lg items-center justify-center cursor-pointer rounded-lg ml-auto mr-auto mb-10"
        ref={btnRef}
        onClick={onOpen}
      >
        {/* right box */}
        <div className="flex gap-4 items-center">
          {/* icon */}
          <div className="h-20 w-20 flex items-center justify-center bg-slate-200 rounded-lg">
            <MdApartment size={48} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">{address1}</span>
            <span className="text-xs opacity-40">{address2}</span>
            <span className="font-bold text-lg">{price}원</span>
          </div>
          <div>
            <IoIosArrowDroprightCircle size={48} className="text-gray-500" />
          </div>
        </div>
      </li>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>{price}</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
