export const InfoCard2 = () => {
  return (
    <article className="relative p-5 pr-10 w-full h-40 flex justify-between bg-rose-200 rounded-lg shadow-lg">
      <hgroup>
        <h4 className="text-sm font-bold opacity-70">상금채납자 조회</h4>

        <h5 className="text-sm font-medium opacity-85">
          혹시 나의 집주인이 상급채납자?!
        </h5>
        <a
          href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=6685&cntntsId=8097"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-1 text-sm font-medium opacity-85 underline underline-offset-4"
        >
          2023년도 고액·상습 채납자 명단을 확인해보세요
        </a>
      </hgroup>
      <img
        src="/icons/criminal.png"
        width={48}
        height={48}
        alt="채납자"
        className="absolute w-12 h-12 bottom-7 right-7"
      />
    </article>
  );
};
