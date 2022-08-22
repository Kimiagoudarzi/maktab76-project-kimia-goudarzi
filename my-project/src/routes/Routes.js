import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "pages/cart/index";
import Error404 from "pages/errors/Error404";
import Cosmetic from "components/products/Cosmetic";
import Hair from "components/products/Hair";
import Perfume from "components/products/Perfume";
import Skin from "components/products/Skin";
import Login from "pages/login/index";
import Home from "pages/userPages/home/Home";
import Products from "pages/adminPages/products";
import Prices from "pages/adminPages/prices";
import Orders from "pages/adminPages/orders";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginForm" element={<Login />} />
        <Route >
          <Route path="/loginForm/products" element={<Products />} />
          <Route path="/admin/prices" element={<Prices />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
