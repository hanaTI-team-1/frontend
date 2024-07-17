import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Swal from "sweetalert2";
import JSConfetti from "js-confetti";

import { Pagination, Navigation } from "swiper/modules";

import checkHugList from "../../../data/checkHugList";

export default function HugModal({ isOpen, onClose, setIsHugOk }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>HUG 보증보험 확인하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HugSlider onClose={onClose} setIsHugOk={setIsHugOk} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function HugSlider({ onClose, setIsHugOk }) {
  const [index, setIndex] = useState(0);
  const [jsConfetti, setJsConfetti] = useState(null);

  useEffect(() => {
    setJsConfetti(new JSConfetti());
  }, []);

  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
    if (swiper.activeIndex === 17 && jsConfetti) {
      jsConfetti.addConfetti({
        confettiColors: ["#CAB0FF"],
        confettiNumber: 500,
      });
    }
  };

  const closeModal = () => {
    setIsHugOk(2);
    onClose();
  };

  return (
    <div
      style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        fontWeight: "bold",
      }}
    >
      <div
        className="swiper-pagination"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ paddingTop: "30px" }} // 페이지네이션 공간을 확보하기 위한 패딩 추가
      >
        {checkHugList.map((check, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              {check}
            </SwiperSlide>
          );
        })}
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <div className="w-full mx-auto relative text-xl font-bold flex justify-center items-center">
            HUG보증 보험 가입이 가능합니다!
          </div>
        </SwiperSlide>
        {index !== 17 ? (
          <CustomNavigationButtons setIsHugOk={setIsHugOk} onClose={onClose} />
        ) : (
          <>
            <div
              className="bg-blue-400 text-center rounded-md pt-2 pb-2 pl-5 pr-5 cursor-pointer mx-auto mb-4 text-white font-bold text-lg hover:bg-blue-300 w-full"
              onClick={() => closeModal()}
            >
              닫기
            </div>
          </>
        )}
      </Swiper>
    </div>
  );
}

const CustomNavigationButtons = ({ setIsHugOk, onClose }) => {
  const { isOpen, onOpen } = useDisclosure();
  const swiper = useSwiper();

  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(true);
    onOpen();
  };

  return (
    <div className="flex flex-col mt-4">
      <div
        className="bg-blue-400 flex items-center rounded-md pt-2 pb-2 pl-5 pr-5 cursor-pointer w-2/3 mx-auto mb-4 text-white font-bold text-lg hover:bg-blue-300 w-full"
        onClick={() => swiper.slideNext()}
      >
        <div className="rounded-full flex items-center justify-center cursor-pointer bg-white text-black p-1">
          <IoMdCheckmark size="25" />
        </div>
        <div className="ml-4 cursor-pointer w-full text-center pr-8">
          맞아요
        </div>
      </div>
      <div
        className="bg-slate-300 flex items-center rounded-md pt-2 pb-2 pl-5 pr-5 cursor-pointer w-2/3 mx-auto mb-4 text-black font-bold text-lg hover:bg-gray-200 w-full"
        // onClick={() => swiper.slidePrev()}
        onClick={() => handleClick()}
      >
        <div className="rounded-full bg-white border-2 flex items-center justify-center cursor-pointer p-1">
          <IoClose size="25" />
        </div>
        <div className="ml-4 cursor-pointer w-full text-center pr-8">
          아니에요
        </div>
      </div>
      {isError && (
        <ErrorModal isOpen={isOpen} onClose={onClose} setIsHugOk={setIsHugOk} />
      )}
    </div>
  );
};

const ErrorModal = ({ isOpen, onClose, setIsHugOk }) => {
  const handleClick = () => {
    onClose();
    setIsHugOk(3);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>HUG 보증보험 확인하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="text-center">
              <div className="w-full mx-auto relative text-xl font-bold h-[210px] flex justify-center items-center">
                보증보험 가입이 불가능합니다.
              </div>
              <div
                className="bg-red-400 text-center rounded-md pt-2 pb-2 pl-5 pr-5 cursor-pointer mx-auto mb-4 text-white font-bold text-lg hover:bg-red-300 w-full"
                onClick={() => handleClick()}
              >
                확인했어요
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
