import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Protect from "./components/Protect";
import ProtectList from "./components/ProtectList";
import Result from "./components/Result";
import RecommendAddr from "./components/RecommendAddr";
import RecommendOpt from "./components/RecommendOpt";
import RecommendList from "./components/RecommendList";
import RecommendMap from "./components/RecommendMap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/protect" element={<Protect />} />
        <Route path="/protect/:id" element={<ProtectList />} />
        <Route path="/protect/:id/result/:atclNo" element={<Result />} />
        <Route path="/recommend" element={<RecommendAddr />} />
        <Route path="/recommend/:address/" element={<RecommendOpt />} />
        <Route
          path="/recommend/:address/:options"
          element={<RecommendList />}
        />
        <Route
          path="/recommend/:address/:options/map"
          element={<RecommendMap />}
        />
      </Routes>
    </>
  );
}

export default App;
