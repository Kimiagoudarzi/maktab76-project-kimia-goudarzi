import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "pages/cart/index";
import Error404 from "pages/errors/Error404";
import Cosmetic from "components/productsPages/Cosmetic";
import Hair from "components/productsPages/Hair";
import Perfume from "components/productsPages/Perfume";
import AboutProduct from "components/aboutProductPage/AboutProduct";
import Skin from "components/productsPages/Skin";
import Login from "pages/login/index";
import Home from "pages/userPages/Home";
import Products from "pages/adminPages/products";
import Prices from "pages/adminPages/prices";
import Orders from "pages/adminPages/orders";
import PrivateRoute from "./privetRout";
import Finalize from "pages/cart/finalize/index";
import Payment from "pages/payment/index";
 

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
        <Route path="/cart/finalize" element={<Finalize/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/loginForm" element={<Login />} />
        <Route >
        <Route path="/loginForm/products" element={ <PrivateRoute><Products /></PrivateRoute>} />
          <Route path="/admin/prices" element={<Prices />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
        <Route>
          <Route path="/products/:id" element={<AboutProduct/>}/>
        </Route>
        <Route>
          <Route path="/:id" element={<AboutProduct/>}/>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
