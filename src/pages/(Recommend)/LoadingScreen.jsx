import { useState, useEffect } from "react";

export const LoadingScreen = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setPhase(1), 8500),
      setTimeout(() => setPhase(2), 16000),
      setTimeout(() => setPhase(3), 24500),
    ];

    return () => intervals.forEach(clearTimeout);
  }, []);

  const renderContent = () => {
    switch (phase) {
      case 0:
        return (
          <div className="content" key={0}>
            <img
              className="w-64 h-64"
              src="/loading/region.png"
              alt="Loading Phase 1"
            />
            <p className="text-xl text-blue-500 font-semibold">
              지역 정보를 분석중이에요
            </p>
          </div>
        );
      case 1:
        return (
          <div className="content" key={1}>
            <img
              className="w-64 h-64"
              src="/loading/price.png"
              alt="Loading Phase 2"
            />
            <p className="text-xl text-blue-500 font-semibold">
              적정 가격을 찾아보고 있어요
            </p>
          </div>
        );
      case 2:
        return (
          <div className="content" key={2}>
            <img
              className="w-64 h-64"
              src="/loading/infra.png"
              alt="Loading Phase 3"
            />
            <p className="text-xl text-blue-500 font-semibold">
              인프라 정보를 불러오고 있어요
            </p>
          </div>
        );
      case 3:
        return (
          <div className="content" key={3}>
            <img
              className="w-64 h-64"
              src="/loading/comingsoon.png"
              alt="Loading Phase 4"
            />
            <p className="text-xl text-blue-500 font-semibold">
              거의 다 됐어요!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center text-center">
      {renderContent()}
    </div>
  );
};
