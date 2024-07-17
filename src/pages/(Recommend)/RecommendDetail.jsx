import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Separator } from "../../components/Separator";
import axios from "axios";
import { JeonseCard3 } from "../../components/card/JeonseCard3";
import RecommendMap from "../../components/map/RecommendMap";

export default function RecommendDetail({ result }) {
  const { gu, dong } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [cardIndex, setCardIndex] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    const getResult = async () => {
      try {
      } catch (error) {
        console.error("Error fetching recommendation:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getResult();
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const handleCardClick = (index) => {
    setCardIndex(index);
    // console.log(Card ${index} clicked);
  };

  return (
    <main className="min-h-full flex flex-col items-center bg-slate-50">
      <div className="min-h-full pt-28 px-0 max-w-[800px] w-full bg-white border-r border-l shadow-md">
        <h1 className="text-center text-4xl font-semibold">
          전세 매물을 찾았습니다
        </h1>
        <h2 className="mt-3 text-center text-2xl font-medium">
          총 <strong className="text-blue-400">{result.length}</strong> 건의
          매물이 검색되었습니다
        </h2>
        <Separator margin={20} />
        <RecommendMap result={result} index={cardIndex} />
        <Separator margin={20} />
        <section className="px-20 max-h-[calc(100vh-35rem)] overflow-y-auto">
          <ul className="w-full space-y-5">
            {result.map((item, index) => (
              <JeonseCard3
                info={item}
                key={index}
                isDetail={true}
                onClick={() => handleCardClick(index)}
                // url={/protect/result/${item.atclNo}}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
