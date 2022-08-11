import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar/NavBar";
import HomeSlider from "./components/homePage/HomeSlider/HomeSlider";
import Footer from "./components/footer/Footer";
import HomeCard from "./components/homePage/HomeCard/HomeCard";
import Cosmetic from "./components/products/Cosmetic";
import Hair from "./components/products/Hair";
import Perfume from "./components/products/Perfume";
import Skin from "./components/products/Skin";
import SunCream from "./components/products/SunCream";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const Layout = () => {
  return (
    <>
      <div className="container-app">
        <NavBar />
        <HomeSlider />
        <HomeCard />
        <Footer className="footer-app" />
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/suncream" element={<SunCream />} />
      </Routes>
    </>
  );
}

export default App;
