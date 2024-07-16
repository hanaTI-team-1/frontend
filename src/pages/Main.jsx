import "animate.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { Suspense, useEffect, useRef, useState } from "react";
import { Footer } from "../components/nav/Footer";
import { Link } from "react-router-dom";

export default function Main() {
  const [isLoaded, setIsLoaded] = useState(false);
  const section2Ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: section2Ref });

  const left = useTransform(
    scrollYProgress,
    [0, 0.35, 0.6, 1],
    [-400, 100, 100, -400]
  );
  const right = useTransform(
    scrollYProgress,
    [0, 0.35, 0.6, 1],
    [400, -100, -100, 400]
  );

  useEffect(() => setIsLoaded(true), []);

  if (!isLoaded) return <div>히</div>;

  return (
    <main className="min-h-full w-full flex justify-center bg-zinc-800">
      <div className="max-w-[800px] w-full bg-white">
        <section className="relative min-h-[600px] h-full">
          <Suspense fallback={<div>영상 처리중</div>}>
            <img
              src="/main.gif"
              style={{ objectFit: "cover", height: "100vh" }}
            />
          </Suspense>
          <hgroup className="absolute top-36 w-full text-white bg-rose-300">
            <h2 className="text-center text-6xl">전세 사기와 추천</h2>
            <h1 className="mt-6 text-center text-7xl">
              <strong className="text-blue-300 font-extrabold">예방</strong>
              에서 만나다
            </h1>
          </hgroup>
          <div className="absolute left-1/2 bottom-20 transform -translate-x-[50%]">
            <IoIosArrowDown
              className="text-white animate-bounce cursor-pointer"
              size="75"
              onClick={() => {
                section2Ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

{
  /* <section
ref={section2Ref}
className="relative min-h-full overflow-x-hidden"
>
<motion.article
  style={{ translateX: left }}
  className="absolute bottom-10 left-10 w-[650px] h-[500px] rounded-xl shadow-2xl overflow-hidden"
>
  <img
    src={"/service-intro-1.png"}
    width={1000}
    style={{ objectFit: "contain" }}
  />
</motion.article>
<motion.article
  style={{ translateX: right }}
  className="absolute top-10 right-10 w-[650px] h-[500px] rounded-xl shadow-2xl overflow-hidden"
>
  <img
    src={"/service-intro-1.png"}
    width={1000}
    style={{ objectFit: "contain" }}
  />
</motion.article>
<motion.p
  viewport={{ once: true }}
  initial={{ opacity: 0 }}
  whileInView={{
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  }}
  className="absolute top-20 left-20 text-4xl font-medium leading-[1.5]"
>
  <strong>예방 추천</strong>
  <br /> 꼭 필요했던.
  <br /> 나에게 딱 맞는
  <br /> 원클릭 전세사기 예방 서비스.
</motion.p>
</section>
<section className="min-h-full mt-20 pt-40 bg-rose-100 flex flex-col justify-between items-center">
<div className="flex flex-col-reverse items-center">
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
  <motion.h2
    viewport={{ once: true }}
    className="text-center text-6xl"
    initial={{ opacity: 0.1, y: 20 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.2 },
    }}
  >
    <strong className="font-bold underline-offset-8 text-blue-500">
      서울 5개
    </strong>
    구 서비스 시작
  </motion.h2>
</div>
<div className="pl-10 py-6 w-full flex items-center justify-evenly bg-neutral-800 text-white text-4xl leading-[1.55] tracking-wide">
  <div>
    이제부터
    <br /> <strong className="text-blue-300">예방</strong>과
    함께하세요.
  </div>
  <Link
    to={"/protect"}
    className="border px-5 h-16 hover:opacity-70 duration-200 hover:border-blue-400"
  >
    시작하기
  </Link>
</div>
</section> */
}
