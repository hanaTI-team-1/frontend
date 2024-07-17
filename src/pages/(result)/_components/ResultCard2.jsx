import { FaCheck } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import { Button, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { checkList } from "../../../data/checkList";
import HugModal from "./HugModal";

// 등기부등본, 보증보험
// isOk == 모름, isOk == 2 합격, isOk = 불합격
export const ResultCard2 = ({ type, isOk, setIsHugOk }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleButtonClick = () => {
    if (type === 5) {
      onOpen();
    } else {
      // window.scrollTo({ top: checkList[type].scroll, behavior: "smooth" });
    }
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
        <h4 className="tetx-md font-bold text-center">
          {checkList[type].title}
        </h4>
        <div className="text-[0.6rem] text-center opacity-70">
          {checkList[type].content}
        </div>
        <Button
          className="w-full"
          onClick={() => {
            handleButtonClick();
          }}
        >
          {checkList[type].btn}
        </Button>
      </motion.article>
      {type === 5 && (
        <HugModal isOpen={isOpen} onClose={onClose} setIsHugOk={setIsHugOk} />
      )}
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
