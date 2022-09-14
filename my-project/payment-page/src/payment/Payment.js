import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const Payment = () => {
  return (
    <>
      <div className="main-payment">
        <div className="payment-table">
          <div style={{ marginRight: "1.4rem" }}>
            <p className="payment-card"> اطلاعات کارت</p>
            <form style={{ marginTop: "2.7rem", fontSize: "19px" }}>
              <div style={{ display: "flex" }}>
                <label for="username" className="payment-title">
                  شماره کارت :
                  <br />
                  <span className="payment-span">
                    شماره 16 رقمی درج شده بر روی کارت
                  </span>
                </label>
                <div>
                  <BsFillCreditCard2FrontFill className="card-icon" />
                  <input type="text" name="number" className="payment-input" />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <label for="username" className="payment-title">
                  شماره شناسایی دوم :
                  <br />
                  <span className="payment-span">
                    شماره 3 یا 4 رقمی درج شده بر روی کارت
                  </span>
                </label>
                <div>
                  <input
                    type="text"
                    name="number"
                    className="payment-cvv2-input"
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <label for="username" className="payment-title">
                  تاریخ انقضای کارت :
                  <br />
                  <span className="payment-span">
                    دو رقم ماه/دو رقم آخر سال را وارد کنید
                  </span>
                </label>
                <div>
                  <input type="text" name="number" className="month" />
                  <input type="text" name="number" className="year" />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <label for="username" className="payment-title">
                  کد امنیتی :
                  <br />
                  <span className="payment-span">
                    کد رو به رو را در کادر وارد کنید
                  </span>
                </label>
                <div>
                  <input type="text" name="number" className="security1" />
                  <input
                    type="text"
                    name="number"
                    className="security2"
                    value="Q9ws1"
                  />
                  <FaRedo className="refresh-icon" />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <label for="username" className="payment-title">
                  رمز دوم (رمز اینترنتی) :
                  <br />
                  <span className="payment-span">
                    رمز پویا برایتان ارسال میشود
                  </span>
                </label>
                <div style={{ display: "flex" }}>
                  <input type="text" name="number" className="second-pass1" />
                  <button className="second-pass2">درخواست رمز پویا</button>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <label for="username" className="payment-title">
                  ایمیل (اختیاری) :
                  <br />
                  <span className="payment-span">
                    رسید پرداخت ایمیل خواهد شد
                  </span>
                </label>
                <div>
                  <input type="text" name="number" className="payment-email" />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <button
                  className="pardakht"
                  onClick={() => {
                    window.open(
                      "http://localhost:3000/result/success",
                      "_blank"
                    );
                  }}
                >
                  پرداخت
                </button>

                <button
                  className="enseraf"
                  onClick={() => {
                    window.open(
                      "http://localhost:3000/wrongResult/failed",
                      "_blank"
                    );
                  }}
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
