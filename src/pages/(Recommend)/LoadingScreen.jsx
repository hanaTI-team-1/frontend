import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setPhase(1), 10000),
      setTimeout(() => setPhase(2), 20000),
      setTimeout(() => setPhase(3), 30000),
    ];

    return () => intervals.forEach(clearTimeout);
  }, []);

  const renderContent = () => {
    switch (phase) {
      case 0:
        return (
          <div className="content" key={0}>
            <img
              className="w-44 h-44"
              src="/smile-girl.jpg"
              alt="Loading Phase 1"
            />
            <p>지역 정보를 분석중이에요</p>
          </div>
        );
      case 1:
        return (
          <div className="content" key={1}>
            <img
              className="w-44 h-44"
              src="/markers/home.png"
              alt="Loading Phase 2"
            />
            <p>적정 가격을 찾아보고 있어요</p>
          </div>
        );
      case 2:
        return (
          <div className="content" key={2}>
            <img
              className="w-44 h-44"
              src="/building.png"
              alt="Loading Phase 3"
            />
            <p>인프라 정보를 불러오고 있어요</p>
          </div>
        );
      case 3:
        return (
          <div className="content" key={3}>
            <img src="/images/phase4.png" alt="Loading Phase 4" />
            <p>거의 다 됐어요!</p>
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

export default LoadingScreen;
