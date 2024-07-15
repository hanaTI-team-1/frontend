import { useNavigate } from "react-router-dom";
import "animate.css";
import {
  cubicBezier,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react";

export default function Main() {
  const section2Ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const x = useMotionValue(0);
  const z = useTransform(x, [0, 1], [0, 2], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });
  console.log(scrollYProgress);

  return (
    <main className="h-full">
      <section className="relative h-full">
        <div className="h-full flex items-center justify-center">
          <img
            src="/main.gif"
            className="h-full"
            style={{ objectFit: "cover" }}
            height={2000}
            width={3000}
          />
        </div>
        {/* TODO : Bgblack 조절하자 */}
        <hgroup className="min-h-[600px] absolute top-0 h-full w-full flex flex-col items-center pt-60 text-white bg-black/10">
          <h2 className="animate__animated animate__fadeInUp text-6xl">
            전세 사기와 추천
          </h2>
          <h1 className="animate__animated animate__fadeInUp mt-6 text-7xl">
            <strong className="text-blue-300">예방</strong>에서 만나다
          </h1>

          <IoIosArrowDown
            className="absolute bottom-20 cursor-pointer animate-bounce"
            size="75"
            onClick={() => {
              section2Ref.current.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </hgroup>
      </section>
      {/* <section
        ref={section2Ref}
        className="h-full bg-gradient-to-b from-black/40 from-10% to-60% to-white"
      >
        <motion.div
          style={{ transform: z }}
          className="absolute w-32 h-32 bg-rose-300"
        ></motion.div>
      </section> */}
    </main>
  );
}

function Main3() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="relative mx-auto">
        <div className="w-full h-full absolute opacity-40 bg-black z-10"></div>
        <div className="w-full text-7xl text-white absolute z-20 font-bold">
          <div className="text-center leading-[1024px]">
            서울 5개 구 서비스 시작
          </div>
        </div>
        <img className="max-w-[1920px] absolute -z-10" src="/main.png" />
      </div>
      {/* <img className="h-3/4" src="/main.png" /> */}
      {/* <div className="bg-black text-white text-3xl flex items-center justify-center p-20">
        <div className="pr-40">
          <div className="mb-3">이제부터</div>
          <div>
            <span className="font-black">예방</span>과 함께하세요
          </div>
        </div>
        <div
          className="border-2 border-white pl-6 pr-6 pt-3 pb-3 cursor-pointer font-semibold"
          onClick={() => {
            navigate("/protect");
          }}
        >
          홈페이지 바로 가기
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

function Main4() {
  return (
    <div className="bg-black text-white text-3xl flex items-center justify-center p-20">
      <div className="pr-40">
        <div className="mb-3">이제부터</div>
        <div>
          <span className="font-black">예방</span>과 함께하세요
        </div>
      </div>
      <div
        className="border-2 border-white pl-6 pr-6 pt-3 pb-3 cursor-pointer font-semibold"
        onClick={() => {
          navigate("/protect");
        }}
      >
        홈페이지 바로 가기
      </div>
    </div>
  );
}
