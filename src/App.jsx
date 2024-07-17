import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Protect from "./pages/Protect";
import Result from "./pages/(result)/Result";
import { Header } from "./components/nav/Header";
import ProtectList from "./pages/ProtectList";
import RecommendGu from "./pages/(Recommend)/RecommendGu";
import RecommendDong from "./pages/(Recommend)/RecommendDong";
import RecommendOpt from "./pages/(Recommend)/RecommendOpt";
import RecommendList from "./pages/(Recommend)/RecommendList";
import InsightModel1Page from "./pages/(insight)/InsightModel1Page";
import InsightPage from "./pages/(insight)/InsightPage";
import InsightModel2Page from "./pages/(insight)/InsightModel2Page";
import InsightModel3Page from "./pages/(insight)/InsightModel3Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<PagesOutlet />}>
          <Route path="/protect" element={<Protect />} />
          <Route path="/protect/:id" element={<ProtectList />} />
          <Route path="/protect/result/:atclNo" element={<Result />} />
          <Route path="/recommend" element={<RecommendGu />} />
          <Route path="/recommend/:gu" element={<RecommendDong />} />
          <Route path="/recommend/:gu/:dong" element={<RecommendOpt />} />
          <Route path="/recommend/:gu/:dong/list" element={<RecommendList />} />
          <Route path="/" element={<InsightPagesOutlet />}>
            <Route path="/insight" element={<InsightPage />} />
            <Route path="/insight/1" element={<InsightModel1Page />} />
            <Route path="/insight/2" element={<InsightModel2Page />} />
            <Route path="/insight/3" element={<InsightModel3Page />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

const PagesOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const InsightPagesOutlet = () => {
  return (
    <main className="min-h-full flex justify-center bg-slate-50">
      <div className="py-20 px-10 min-h-full max-w-[800px] w-full border-l bg-white border-r shadow-md">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
