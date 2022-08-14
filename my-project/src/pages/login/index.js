import React from "react";
import "./login.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import pic from "../../assets/images/p44.png";
import butterfly from "../../assets/images/butter.png";

const Login = () => {
  return (
    <section className="login-body">
      <MDBContainer className="login-container gradient-form">
        <MDBRow className="row-login">
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center  h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <img src={pic} alt="pic" className="small mb-0 img-login" />
              </div>
            </div>
          </MDBCol>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src={butterfly} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">ورود به پنل مدیریت میا لند</h4>
              </div>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="نام کاربری"
                id="form1"
                type="email"
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                placeholder="رمز عبور"
                id="form2"
                type="password"
                required
              />
              <div className="text-center pt-1 mb-5 pb-1">
                <Link to="/loginForm/admin">
                  <button className="mb-4 w-100 gradient-custom-2">ورود</button>
                </Link>
                <a className="text-muted" href="#!">
                  فراموشی رمز عبور!
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <Link to="/">
                  <button outline className="btn-login-back">
                    بازگشت به سایت
                  </button>
                </Link>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
export default Login;
