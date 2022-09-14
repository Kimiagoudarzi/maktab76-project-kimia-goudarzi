import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Payment from "../payment/Payment";
import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment/>}/>
        {/* <Route path ="http://localhost:3000" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
