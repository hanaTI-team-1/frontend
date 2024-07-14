export default function ResultNav() {
  return (
    <div className="w-80 mt-20 ml-20">
      <div className="font-black text-3xl">검사결과보기</div>
      <div
        className="flex mt-4 cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 1024, behavior: "smooth" });
        }}
      >
        <div className="ml-2 mr-3 w-7 h-7 bg-orange-400 rounded-md"></div>
        <div>적정전세가</div>
      </div>
      <div
        className="flex mt-2 cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 2048, behavior: "smooth" });
        }}
      >
        <div className="ml-2 mr-3 w-7 h-7 bg-orange-300 rounded-md"></div>
        <div>전세가율</div>
      </div>
      <div
        className="flex mt-2 cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 3072, behavior: "smooth" });
        }}
      >
        <div className="ml-2 mr-3 w-7 h-7 bg-orange-100 rounded-md"></div>
        <div>필수요소</div>
      </div>
    </div>
  );
}
