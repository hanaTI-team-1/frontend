import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Main() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-[1024px] bg-slate-300">
        <div className="">전세 사기와 추천</div>
        <div>예방에서 만나다</div>
      </div>
      <Footer />
    </>
  );
}
