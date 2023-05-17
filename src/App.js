import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import TourPackage from "./pages/TourPackage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<TourPackage />} />
        <Route path="/destinations/:title" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
