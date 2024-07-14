import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "animate.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[1024px] bg-slate-300 relative">
        <Header />
        <div className="h-[968px] flex flex-col justify-center items-center">
          <div className="animate__animated animate__fadeInUp font-bold text-5xl">
            전세 사기와 추천
          </div>
          <div className="animate__animated animate__fadeInUp font-bold mt-6 text-6xl">
            예방에서 만나다
          </div>
          <div className="absolute bottom-10">
            <IoIosArrowDown
              className="cursor-pointer"
              size="75"
              onClick={() => {
                window.scrollTo({ top: 1024, behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-[1024px] bg-slate-200 relative text-4xl">
        <div className="absolute top-20 left-10">
          <div className="font-bold text-5xl">예방 추천</div>
          <div>꼭 필요했던.</div>
          <div>나에게 딱맞는.</div>
          <div>원클릭 전세사기 예방 서비스</div>
        </div>
        <div className="w-[1152px] h-[614px] bg-slate-400 absolute -right-56 top-12 rounded-lg"></div>
        <div className="absolute bottom-20 right-10 text-right">
          <div>주소 검색 한번에</div>
          <div>내가 찾는 전세 매물이</div>
          <div>사기인지 예방할 수 있어요</div>
        </div>
        <div className="w-[1152px] h-[614px] bg-slate-300 absolute -left-56 bottom-12 rounded-lg"></div>
      </div>
      <div className="h-[1024px] relative">
        <div className="w-full h-[1024px] absolute opacity-40 bg-black z-10"></div>
        <div className="w-full h-[1024px] text-7xl text-white absolute z-20 font-bold">
          <div className="text-center leading-[1024px]">
            서울 5개 구 서비스 시작
          </div>
        </div>
        <img className="absolute -z-10" src="/main.png"></img>
      </div>
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
      <Footer />
    </>
  );
}
