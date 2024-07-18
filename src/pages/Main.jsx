import "animate.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { forwardRef, Suspense, useEffect, useRef, useState } from "react";
import { Footer } from "../components/nav/Footer";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

export default function Main() {
  const [isLoaded, setIsLoaded] = useState(false);
  const section2Ref = useRef();
  useEffect(() => setIsLoaded(true), []);

  if (!isLoaded)
    return (
      <main className="xl:text-2xl h-full w-full flex items-center justify-center">
        <Spinner />
      </main>
    );
  return (
    <main className="min-h-full h-full">
      <Section1 prop={section2Ref} />
      <Section2 ref={section2Ref} />
      <Section3 />
      <Footer />
    </main>
  );
}

const Section1 = ({ prop }) => {
  return (
    <section className="relative h-full">
      <Suspense fallback={<div>영상 처리중</div>}>
        <img
          src="/main.gif"
          style={{ objectFit: "cover", height: "100vh" }}
          width={4000}
          height={4000}
        />
      </Suspense>
      <hgroup className="min-h-[600px] absolute top-0 h-full w-full flex flex-col items-center pt-60 text-white bg-black/20">
        <div className="w-[1500px] flex flex-col items-center">
          <h2 className="w-full animate__animated animate__fadeInUp text-3xl sm:text-5xl lg:text-8xl text-right px-[30%]">
            전세 사기 방지
          </h2>

          <h1 className="w-full animate__animated animate__fadeInUp mt-16 text-2xl sm:text-4xl lg:text-7xl text-right px-[30%]">
            <strong className="text-blue-300 font-extrabold">예방</strong>
            에서 만나다
          </h1>
        </div>
      </hgroup>
      <div className="absolute left-1/2 bottom-20 transform -translate-x-[50%]">
        <IoIosArrowDown
          className="text-white animate-bounce cursor-pointer text-5xl sm:text-6xl lg:text-7xl"
          onClick={() => prop.current.scrollIntoView({ behavior: "smooth" })}
        />
      </div>
    </section>
  );
};

const Section2 = forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({ target: ref });

  const w = window.screen.width;
  let size = 500;
  if (w <= 1280) size = 450;
  if (w <= 1024) size = 400;
  if (w <= 768) size = 350;
  if (w <= 640) size = 300;

  const left = useTransform(scrollYProgress, [0, 0.35], [-size, 0]);
  const right = useTransform(scrollYProgress, [0, 0.35], [size, 0]);

  return (
    <section
      ref={ref}
      className="p-14 pt-24 pb-40 min-h-full flex justify-center overflow-x-hidden"
    >
      <div className="2xl:max-w-[1300px] w-full">
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 0.85,
            transition: { duration: 1, delay: 0.2 },
          }}
          className="text-4xl font-medium leading-[1.5]"
        >
          <strong>예방 추천</strong>
          <br /> 꼭 필요했던.
          <br /> 나에게 딱 맞는
          <br /> 원클릭 전세사기 예방 서비스.
        </motion.p>
        <div className="relative pt-10">
          <div className="flex justify-start">
            <motion.article
              style={{ translateX: left }}
              className="lg:max-w-[700px] border shadow-xl rounded-xl"
            >
              <img
                src={"/intro/service1.png"}
                width={1500}
                height={1500}
                style={{ objectFit: "contain" }}
                className="rounded-xl"
              />
            </motion.article>
          </div>
          <div className="py-16 xl:py-24 flex justify-end">
            <motion.article
              style={{ translateX: right }}
              className="lg:max-w-[700px] mt-16 border shadow-xl rounded-xl"
            >
              <img
                src={"/intro/service3.png"}
                width={1000}
                style={{ objectFit: "contain" }}
                className="rounded-xl"
              />
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
});

const Section3 = () => {
  return (
    <section className="h-full flex flex-col justify-between items-center bg-gradient-to-b from-70% to-95% from-white to-black/30">
      <div className="pt-20">
        <motion.h2
          viewport={{ once: true }}
          className="text-center font-medium text-4xl sm:text-5xl md:text-6xl"
          initial={{ opacity: 0.1, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", delay: 0.2 },
          }}
        >
          <strong className="font-bold text-blue-500">서울 5개</strong>구 서비스
          시작
        </motion.h2>
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0.1, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
          }}
          src="/seoul.png"
          width={600}
          height={600}
        />
      </div>
      <div className="pl-10 py-6 w-full flex items-center justify-evenly bg-neutral-800 text-white leading-[1.55] tracking-wide">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          지금부터
          <br /> <strong className="text-blue-300">예방</strong>과 함께하세요.
        </div>
        <Link
          to={"/protect"}
          className="px-7 py-3 sm:px-10 md:py-4 lg:px-20 lg:py-5 border rounded hover:opacity-70 duration-300 hover:border-blue-400"
        >
          시작하기
        </Link>
      </div>
    </section>
  );
};
