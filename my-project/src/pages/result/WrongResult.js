import NavBar from "layout/userLayoute/navbar";
import error from "assets/images/error1.png";
import React from "react";

const WrongResult = () => {
  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "6rem", marginBottom: "9rem" }}
      >
        <h1 style={{ color: "#9C1C6B" }}>نتیجه پرداخت</h1>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src={error}
          alt="check"
          style={{ width: "9rem", marginLeft: "4rem" }}
        />
        <h4 style={{ marginTop: "3rem" }}>
          پرداخت موفقیت آمیز نبود <br /> سفارش شما در انتظار پرداخت است
        </h4>
      </div>
    </>
  );
};

export default WrongResult;
