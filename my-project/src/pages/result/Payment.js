import React from "react";
import Result from "./Result";
import WrongResult from "./WrongResult";

const Payment = () => {
  const urlParams = window.location.href.split("/");
  const result = urlParams[urlParams.length - 1];
  return <>{result === "success" ? <Result /> : <WrongResult />}</>;
};

export default Payment;
