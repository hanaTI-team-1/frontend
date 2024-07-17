import { FaCheck } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { checkList } from "../../../data/checkList";
import { useState } from "react";
import axios from "axios";

// 등기부등본, 보증보험
// isOk == 모름, isOk == 2 합격, isOk = 불합격
export const ResultCard3 = ({
  type,
  isOk,
  setIsCertiOk,
  aptDong,
  setAptDong,
  aptHo,
  setAptHo,
  addressRoad,
}) => {
  const [isLoading, setIsLoading] = useState(1); // 1: 다운로드 전, 2: 다운로드 중, 3: 다운로드 완료
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDownloadClick = async () => {
    setIsLoading(2);
    try {
      // await axios
      //   .post(
      //     `http://34.64.53.101:8081/api/jeonse/register-doc?address=${addressRoad} ${aptDong} ${aptHo}`,
      //     {},
      //     { responseType: "blob" }
      //   )
      //   .then((response) => {
      //     const blob = response.data;
      //     const url = window.URL.createObjectURL(blob);
      //     const a = document.createElement("a");
      //     a.style.display = "none";
      //     a.href = url;
      //     a.download = `${addressRoad}_${aptDong}_${aptHo}_등기부등본.pdf`;
      //     document.body.appendChild(a);
      //     a.click();
      //     window.URL.revokeObjectURL(url);
      //   })
      //   .catch((error) => console.error("Download failed:", error));
    } catch (error) {
      setIsCertiOk(3);
      console.error("Error fetching recommendation:", error);
    } finally {
      setIsLoading(3);
    }
  };

  const closeButtonClick = () => {
    onClose();
    setIsCertiOk(2);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0.2, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: checkList[type].duration,
            delay: checkList[type].delay,
          },
        }}
        className={`h-52 w-48 pt-7 px-5 flex flex-col items-center shaow-lg hover:shadow-2xl gap-2 relative rounded-xl duration-200
        ${isOk == 1 && "bg-slate-200 hover:bg-slate-300"}
        ${isOk == 2 && "bg-blue-200 hover:bg-blue-300"}
        ${isOk == 3 && "bg-gray-400 hover:bg-gray-500"}`}
      >
        {isOk == 1 && <OrangeTriangle />}
        {isOk == 2 && <GreenCheck />}
        {isOk == 3 && <RedX />}
        <img
          src={checkList[type].imgUrl}
          width={64}
          height={64}
          alt={checkList[type].imgUrl}
          className="object-contain"
        />
        <h4 className="tetx-md font-bold text-center">등기부등본</h4>
        <div className="text-[0.6rem] text-center opacity-70">
          다운로드 후 내용을 확인하세요
        </div>
        <Button
          className="w-full"
          onClick={() => {
            onOpen();
          }}
        >
          {isOk === 2 ? <>다운로드 완료</> : <>다운로드</>}
        </Button>
      </motion.article>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>등기부등본</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading === 1 ? (
              <>
                <div>
                  <h1 className="mb-5 text-xl font-semibold">
                    상세한 주소를 입력해주세요
                  </h1>
                  <div className="flex items-center mb-5">
                    <input
                      className="pl-2 sm:pl-6 w-full h-12 sm:h-14 border-2 rounded-lg md:rounded-full text-sm sm:text-md shadow-lg focus:outline-none"
                      placeholder="동을 입력해주세요 ex) 205동"
                      onChange={(e) => setAptDong(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center mb-5">
                    <input
                      className="pl-2 sm:pl-6 w-full h-12 sm:h-14 border-2 rounded-lg md:rounded-full text-sm sm:text-md shadow-lg focus:outline-none"
                      placeholder="호를 입력해주세요 ex) 505호"
                      onChange={(e) => setAptHo(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className="bg-blue-400 text-center rounded-md pt-2 pb-2 pl-5 pr-5 cursor-pointer mx-auto mb-4 text-white font-semibold text-lg hover:bg-blue-300 w-full"
                  onClick={() => handleDownloadClick()}
                >
                  등기부등본 다운로드
                </div>
              </>
            ) : isLoading === 2 ? (
              <>
                <div>
                  <div className="flex justify-center items-center scale-125">
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.400"
                      size="xl"
                    />
                  </div>
                  <div className="text-sm text-gray-400 text-center mt-10 mb-2 font-semibold">
                    예방에서 800원을 대신 지불했어요
                  </div>
                  <div className="flex justify-center">
                    <div className="text-xl font-bold pb-5">
                      잠시만 기다려주세요
                    </div>
                    <div className="w-10 text-xl">
                      <span className="animate-dots "></span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center mt-5 mb-5 ">
                  <div className="text-xl font-bold pb-5">
                    다운로드가 완료되었습니다
                  </div>
                </div>
                <div
                  className="bg-blue-400 text-center rounded-md pt-2 pb-2 pl-5 pr-5 cursor-pointer mx-auto mb-4 text-white font-semibold text-lg hover:bg-blue-300 w-full"
                  onClick={() => closeButtonClick()}
                >
                  닫기
                </div>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export function GreenCheck() {
  return (
    <div className="bg-green-400 w-10 h-10 flex items-center justify-center rounded-full absolute top-2 right-2">
      <FaCheck size={18} className="text-white" />
    </div>
  );
}

function OrangeTriangle() {
  return (
    <div className="bg-orange-400 w-10 h-10 flex items-center justify-center rounded-full absolute top-2 right-2">
      <FaMagnifyingGlass size={18} className="text-white" />
    </div>
  );
}

function RedX() {
  return (
    <div className="bg-red-400 w-10 h-10 flex items-center justify-center rounded-full absolute top-2 right-2">
      <FaExclamation size={18} className="text-white" />
    </div>
  );
}
