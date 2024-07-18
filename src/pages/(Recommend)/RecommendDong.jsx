import { useParams } from "react-router-dom";
import SeoulDongMap from "../../components/map/SeoulDongMap";

export default function RecommendDong() {
  const { gu } = useParams();
  return (
    <>
      <div className="min-h-full w-full flex justify-center bg-slate-50">
        <div className=" pt-28 w-full max-w-[800px] flex flex-col items-center bg-white border shadow-md">
          <h1 className="text-center text-4xl font-semibold">
            <span className="font-black">예방AI</span>가 전세 매물을
            추천해줍니다
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-center break-keep">
            서울의 원하는 지역을 선택해주세요
          </p>
          <p className="text-md sm:text-xl text-center break-keep text-blue-400 font-semibold">
            {gu}
          </p>
          <SeoulDongMap gu={gu} />
        </div>
      </div>
    </>
  );
}
