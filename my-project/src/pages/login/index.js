import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/features/user/userSlice";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import pic from "assets/images/p44.png";
import butterfly from "assets/images/butter.png";
import "./login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.users);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true)
    const data = new FormData(e.currentTarget);
    setUsername(data.get("username"));
    setPass(data.get("password"));
    dispatch(login({ username, pass }));
  };
  if (isLoggedIn) return <Navigate to={"/loginForm/products"} />;

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

              <form onSubmit={handleSubmit}>
                
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="نام کاربری"
                  id="fname"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="رمز عبور"
                  id="pass"
                  type="password"
                  name="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />

                <div className="text-center pt-1 mb-5 pb-1">
                  <button
                    className="mb-4 w-100 gradient-custom-2"
                    type="submit"
                  >
                    ورود
                  </button>

                  <a className="text-muted" href="#!">
                    فراموشی رمز عبور!
                  </a>
                </div>
              </form>
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
