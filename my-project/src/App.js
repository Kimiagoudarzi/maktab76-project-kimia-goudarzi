import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./layout/navbar/NavBar";
import HomeSlider from "./page/Home/HomeSlider/HomeSlider";
import Cart from "./page/Cart/Cart";
import Admin from "./page/Admin/Admin";
import NoMatched from "./page/noMatched/NoMatched";
import Footer from "./layout/footer/Footer";
import HomeCard from "./page/Home/HomeCard/HomeCard";
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
        {/* <HomeSlider />
        <HomeCard /> */}
        {/* <Footer className="footer-app" /> */}
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NoMatched />} />
      </Routes>
    </>
  );
}

export default App;
