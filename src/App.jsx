import Navbar from "./components/Navi";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Houses from "./components/Houses";
import Qoutes from "./components/Qoutes";
import Characters from "./components/Characters";
import Housedetails from "./components/Housedetails";
import Chardetails from "./components/Chardetails";
export default function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:slug" element={<Chardetails />} />
        <Route path="/housedetails/:slug" element={<Housedetails />} />
        <Route path="/qoutes" element={<Qoutes />} />
      </Routes>
    </>
  );
}
