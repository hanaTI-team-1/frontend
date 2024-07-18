import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Separator } from "../../components/Separator";
import axios from "axios";
import { JeonseCard3 } from "../../components/card/JeonseCard3";
import RecommendDetail from "./RecommendDetail";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { LoadingScreen } from "./LoadingScreen";

export default function RecommendList() {
  const { gu, dong } = useParams();
  const [searchParams] = useSearchParams();

  const price = searchParams.get("price");
  const policeStation = searchParams.get("policeStation");
  const groceries = searchParams.get("groceries");
  const schools = searchParams.get("schools");
  const busStations = searchParams.get("busStations");
  const subwayStations = searchParams.get("subwayStations");

  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [detail, setDetail] = useState(false);
  const [type, setType] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const params = {
      dongName: dong,
      policeOffice: policeStation,
      subway: subwayStations,
      school: schools,
      mart: groceries,
      bus: busStations,
      price: price,
    };

    const getResult = async () => {
      try {
        const response = await axios.post(
          "http://34.64.53.101:8081/api/jeonse/recommend",
          params
        );
        // const response = await axios.get("/sample/recommend.json");
        // console.log(response.data.data.clusterType);
        setResult(response.data.data.recommend);
        setType(response.data.data.clusterType);
        console.log(result);
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

  if (isLoading) {
    return (
      <main className="min-h-full flex justify-center bg-slate-50">
        <div className="min-h-full w-full max-w-[800px] bg-white border-l border-r shadow-md">
          <h2 className="mt-36 bg-neutral-600 py-5 text-white w-full text-center text-4xl font-bold">
            AI가 추천 목록을 생성 중입니다
          </h2>
          <h3 className="mt-4 text-center text-xl flex justify-center">
            예상 소요시간은{" "}
            <span className="pl-2 pr-2 font-semibold text-md text-blue-300">
              45초
            </span>{" "}
            입니다
            <div className="w-10 text-left">
              <span className="animate-dots w-5"></span>
            </div>
          </h3>
          <div className="pt-20 flex justify-center">
            <LoadingScreen />
          </div>
        </div>
      </main>
    );
  }

  const typeEng = ["A", "B", "C", "D"];

  return (
    <>
      {!detail ? (
        <main className="min-h-full h-full flex flex-col items-center bg-slate-50">
          <div className="min-h-full pt-28 px-0 max-w-[800px] w-full bg-white border-r border-l shadow-md">
            <div className="relative">
              <div
                className="text-gray-400 absolute right-10 -top-7 cursor-pointer border-b border-gray-300"
                onClick={() => {
                  onOpen();
                }}
              >
                유형이란?
              </div>
            </div>
            <h1 className="text-center text-4xl font-semibold">
              전세 매물을 찾았습니다
            </h1>

            <h2 className="mt-3 text-center text-2xl font-medium">
              {result === undefined || result.length === 0 ? (
                <>추천 결과가 없습니다</>
              ) : (
                <>
                  {" "}
                  <div className="flex justify-evenly">
                    <p className="text-center text-2xl font-semibold">
                      AI가 분석한 당신의 성향은{" "}
                      <span className="text-blue-500 font-bold">
                        {typeEng[parseInt(type.replace("Cluster ", ""))] + " "}{" "}
                        성향
                      </span>
                      입니다
                    </p>
                  </div>
                  총 <strong className="text-blue-400">{result.length}</strong>{" "}
                  건의 매물이 검색되었습니다
                </>
              )}
            </h2>
            <Separator margin={20} />
            <section className="px-20 max-h-[calc(100vh-17.5rem)] overflow-y-auto">
              <ul className="space-y-7">
                {result === undefined || result.length === 0 ? (
                  <>
                    <div className="text-center text-xl font-semibold">
                      더 구체적인 조건을 입력해주세요
                    </div>
                    <div className="flex justify-center ">
                      <div
                        className="py-3 h-12 rounded-lg bg-blue-300 text-center w-[90%] cursor-pointer hover:bg-blue-200 hover:rounded-none duration-300"
                        onClick={() => {
                          navigate(-1);
                        }}
                      >
                        뒤로가기
                      </div>
                    </div>
                  </>
                ) : (
                  result.map((item, index) => (
                    <JeonseCard3
                      info={item}
                      key={index}
                      isDetail={false}
                      setDetail={setDetail}
                    />
                  ))
                )}
              </ul>
            </section>
          </div>
          <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>예방AI의 유형 분류</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div>
                  <div className="flex items-center mb-3">
                    <img className="w-20" src="/type/couple.png" />
                    <div className="pl-3 mr-5 text-xl font-semibold text-blue-500">
                      A 유형
                    </div>
                    <div className="font-semibold">
                      주거 안정성이 중요합니다
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <img className="w-20" src="/type/flex.png" />
                    <div className="pl-3 mr-5 text-xl font-semibold text-blue-500">
                      B 유형
                    </div>
                    <div className="font-semibold">가격이 중요합니다</div>
                  </div>
                  <div className="flex items-center mb-3">
                    <img className="w-20" src="/type/insider.png" />
                    <div className="pl-3 mr-5 text-xl font-semibold text-blue-500">
                      C 유형
                    </div>
                    <div className="font-semibold">이동 수단이 중요합니다</div>
                  </div>
                  <div className="flex items-center mb-3">
                    <img className="w-20" src="/type/outsider.png" />
                    <div className="pl-3 mr-5 text-xl font-semibold text-blue-500">
                      D 유형
                    </div>
                    <div className="font-semibold">집돌이 타입입니다</div>
                  </div>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </main>
      ) : (
        <RecommendDetail result={result} />
      )}
    </>
  );
}
