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

export default App;
