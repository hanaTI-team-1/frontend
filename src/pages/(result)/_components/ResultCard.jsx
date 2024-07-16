import { FaCheck } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { checkList } from "../../../data/checkList";

// 적정 전세가 전세가율 건출물대장 공인중개사
export const ResultCard = ({ type, success }) => {
  return (
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
        ${success && "bg-blue-200 hover:bg-blue-300"}
        ${!success && "bg-gray-400 hover:bg-gray-500"}`}
      // ${check.result == 2 && "bg-slate-200 hover:bg-slate-300"}
    >
      {success && <GreenCheck />}
      {!success && <RedX />}
      {/* {!success && <OrangeTriangle />} */}
      <img
        src={checkList[type].imgUrl}
        width={64}
        height={64}
        alt={checkList[type].imgUrl}
        className="object-contain"
      />
      <h4 className="tetx-md font-bold text-center">{checkList[type].title}</h4>
      <div className="text-[0.6rem] text-center opacity-70">
        {checkList[type].content}
      </div>
      <Button
        className="w-full"
        onClick={() => {
          window.scrollTo({ top: checkList[type].scroll, behavior: "smooth" });
        }}
      >
        {checkList[type].btn}
      </Button>
    </motion.article>
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
