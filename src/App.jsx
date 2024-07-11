import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Recommend from "./components/Recommend";
import Protect from "./components/Protect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/protect" element={<Protect />} />
        {/* <Route path="/:id" element={} /> */}
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </>
  );
}

export default App;
