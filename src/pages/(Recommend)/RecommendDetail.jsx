import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Separator } from "../../components/Separator";
import axios from "axios";
import { JeonseCard3 } from "../../components/card/JeonseCard3";
import RecommendMap from "../../components/map/RecommendMap";

export default function RecommendDetail({ result }) {
  const { gu, dong } = useParams();
  const [searchParams] = useSearchParams();

  const price = searchParams.get("price");
  const policeStation = searchParams.get("policeStation");
  const groceries = searchParams.get("groceries");
  const schools = searchParams.get("schools");
  const busStations = searchParams.get("busStations");
  const subwayStations = searchParams.get("subwayStations");

  const [isLoading, setIsLoading] = useState(true);

  const [cardIndex, setCardIndex] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    const getResult = async () => {
      try {
        // const response = await axios.post(
        //   "http://34.64.53.101:8081/api/jeonse/recommend",
        //   params
        // );
        // const response = await axios.get("/recommend.json");
        // // console.log(response.data);
        // setResult(response.data.data);
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

  if (isLoading) {
    return (
      <main className="min-h-full flex justify-center bg-slate-50">
        <div className="min-h-full w-full max-w-[800px] bg-white border-l border-r shadow-md">
          <h2 className="mt-36 bg-neutral-600 py-5 text-white w-full text-center text-4xl font-bold">
            AI가 추천 목록을 생성 중입니다
          </h2>
          <div className="pt-20 flex justify-center">
            <div className="h-96 w-96 flex items-center justify-center relative">
              <div className="absolute h-40 w-40 rounded-full bg-blue-200/50 animate-ping" />
              <img
                src="/vite.svg"
                width={128}
                height={128}
                alt="loading"
                className="inset-0 z-10 w-48 h-48"
              />
            </div>
          </div>
          <div className="pt-20 flex justify-center">
            <p className="w-72 opacity-70">
              검사는 최대 1분까지 소요될 수 있습니다...
            </p>
          </div>
        </div>
      </main>
    );
  }

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
