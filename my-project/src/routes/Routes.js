import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Cart from "../pages/cart/index";
import Admin from "../pages/adminPages/admin/index";
import Error404 from "../pages/errors/Error404";
import Cosmetic from "../components/products/Cosmetic";
import Hair from "../components/products/Hair";
import Perfume from "../components/products/Perfume";
import Skin from "../components/products/Skin";
import SunCream from "../components/products/SunCream";
import Home from "../pages/userPages/home/Home";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/suncream" element={<SunCream />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes;