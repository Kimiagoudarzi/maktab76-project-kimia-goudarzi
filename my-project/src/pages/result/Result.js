import NavBar from "layout/userLayoute/navbar";
import Check from "assets/images/check.png"
import React from "react";

const Result = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center" style={{ marginTop: "6rem", marginBottom:"9rem" }}>
        <h1 style={{color: "#9C1C6B"}}>نتیجه پرداخت</h1>
      </div>
      <div className="d-flex justify-content-center">
        <img src={Check} alt="check" style={{width: "9rem", marginLeft:"4rem"}}/>
        <h4 style={{marginTop: "3rem"}}>
          با تشکر از پرداخت شما, سفارش شما<br/> ثبت شده و جهت هماهنگی ارسال با شما
          تماس گرفته خواهد شد
        </h4>
      </div>
    </>
  );
};

export default Result;
