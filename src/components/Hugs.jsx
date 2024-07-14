import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import checkHugList from "../data/checkHugList";
import { GreenCheck, GrayCheck } from "./Utils";

export default function CheckHugBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checkedItems, setCheckedItems] = useState(Array(16).fill(false));
  const [allChecked, setAllChecked] = useState(false);

  const handleItemClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  useEffect(() => {
    const tempAllChecked = checkedItems.every((item) => item);
    setAllChecked(tempAllChecked);
  }, [checkedItems]);

  return (
    <div
      className="mt-5 cursor-pointer"
      onClick={() => {
        onOpen();
      }}
    >
      <div className="w-full bg-orange-400 h-14 rounded-2xl flex items-center">
        <div className="ml-2 w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <FaMagnifyingGlass size="25" />
        </div>
        <div className="font-bold text-lg text-center pr-3" style={{ flex: 1 }}>
          검사하기
        </div>
      </div>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <div className="text-xl">HUG 보증보험 신청가능 체크리스트</div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="font-bold mb-4 text-gray-500">
                모든 항목이 체크되어야 보증보험 신청이 가능해요
              </div>
              {checkHugList.map((item, index) => (
                <div key={index} onClick={() => handleItemClick(index)}>
                  <HugCard isChecked={checkedItems[index]} content={item} />
                </div>
              ))}
              {allChecked ? (
                <div className="text-lg text-center font-bold mt-5 text-blue-500">
                  보증보험 신청이 가능해요!
                </div>
              ) : (
                <div className="text-lg text-center font-bold mt-5 text-red-500">
                  보증보험 신청이 불가해요
                </div>
              )}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                닫기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

function HugCard({ isChecked, content }) {
  return isChecked ? (
    <CheckedHugCard content={content} />
  ) : (
    <UnCheckedHugCard content={content} />
  );
}

function CheckedHugCard({ content }) {
  return (
    <div className="w-full rounded-3xl shadow-lg flex items-center border-green-400 border-2 pl-3 pr-3 pt-3 pb-3 mb-3 cursor-pointer">
      <div>
        <GreenCheck />
      </div>
      <div className="pl-2">{content}</div>
    </div>
  );
}

function UnCheckedHugCard({ content }) {
  return (
    <div className="w-full rounded-3xl shadow-lg flex items-center border-gray-300 border-2 pl-3 pr-3 pt-3 pb-3 mb-3 cursor-pointer">
      <div>
        <GrayCheck />
      </div>
      <div className="pl-2">{content}</div>
    </div>
  );
}
