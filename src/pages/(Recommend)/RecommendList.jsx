import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { api } from "../../lib/api";
import { Separator } from "../../components/Separator";
import { JeonseCard2 } from "../../components/card/JeonseCard2";
import axios from "axios";

export default function RecommendList() {
  const { dong } = useParams();
  const [searchParams] = useSearchParams();

  const price = searchParams.get("price");
  const policeStation = searchParams.get("policeStation");
  const groceries = searchParams.get("groceries");
  const schools = searchParams.get("schools");
  const busStations = searchParams.get("busStations");
  const subwayStations = searchParams.get("subwayStations");

  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const params = {
      dongName: dong,
      policeOffice: policeStation,
      subway: subwayStations,
      school: schools,
      mart: groceries,
      bus: busStations,
      price: price / 10000,
    };

    const getResult = async () => {
      try {
        // const response = await axios.post(
        //   "http://34.64.53.101:8081/api/jeonse/recommend",
        //   params
        // );
        const response = await axios.get("/recommend.json");
        console.log(response.data);
        setResult(response.data.data);
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

  if (isLoading) return <div>히</div>;

  return (
    <main className="min-h-full h-full flex flex-col items-center bg-slate-50">
      <div className="min-h-full pt-28 px-0 max-w-[800px] w-full bg-white border-r border-l shadow-md">
        <h1 className="text-center text-4xl font-semibold">
          전세 매물을 찾았습니다
        </h1>
        <h2 className="mt-3 text-center text-2xl font-medium">
          총 <strong className="text-blue-400">{result.length}</strong> 건의
          매물이 검색되었습니다
        </h2>
        <Separator margin={20} />
        <section className="px-20 max-h-[calc(100vh-15rem)] overflow-y-auto">
          <ul className="space-y-7">
            {result.map((item, index) => (
              <JeonseCard2
                info={item.jeonse}
                key={index}
                // url={`/protect/result/${item.atclNo}`}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
