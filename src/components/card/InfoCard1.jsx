export const InfoCard1 = () => {
  return (
    <article className="relative p-5 pr-10 w-full h-40 flex justify-between bg-blue-200 rounded-lg shadow-lg">
      <hgroup>
        <h4 className="text-sm font-bold opacity-70">등기부등본</h4>
        <a
          href="https://blog.toss.im/article/house-contract-02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="text-sm font-medium opacity-85">
            등기부등본을 해석하시는 방법{" "}
            <u className="underline-offset-4 font-medium">살펴보기</u>
          </h5>
        </a>
      </hgroup>
      <img
        src="/icons/to-do-list.png"
        width={48}
        height={48}
        alt="등기부등본"
        className="absolute w-12 h-12 bottom-7 right-7"
      />
    </article>
  );
};
