import { FaAngleRight } from "react-icons/fa";

export const PassCard2 = () => {
  return (
    <article className="p-5 pr-10 w-full h-40 flex justify-between bg-rose-300 rounded-lg shadow-lg">
      <hgroup>
        <h4 className="text-sm font-bold opacity-70">등기부등본</h4>
        <h5 className="text-sm font-medium opacity-85">
          대법원 등기소에서 데이터를 조회해보세요
        </h5>
        <p className="text-sm">
          <u className="underline-offset-4">등기소 읽는법 확인하기</u>
        </p>
      </hgroup>
      <div className="h-full flex items-center">
        <FaAngleRight size={24} />
      </div>
    </article>
  );
};
