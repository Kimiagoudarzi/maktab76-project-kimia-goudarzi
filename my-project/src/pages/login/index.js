import { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import pic from "assets/images/p44.png";
import butterfly from "assets/images/butter.png";
import "./login.css";



const Login = () => {
  const initialValues = {userName: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({...formValues,[name]: value});
    console.log(formValues);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  }, [formErrors]);
  const validate = (values)=>{
    const errors = {};
    if(!values.userName){
      errors.userName = "نام کاربری الزامی است"
    }else if(values.userName.length < 3){
      errors.userName = "نام کاربری باید بیشتر از 3 کاراکتر باشد"

    }
    else if(!values.password){
      errors.password = "رمز عبور الزامی است"
    }else if (values.password.length <4){
      errors.password = "رمز عبور باید بیشتر از 4 کاراکتر باشد"
    }else if (values.password.length >10){
      errors.password = "رمز عبور نباید بیشتر از 10 کارکتر باشد"
    }
    return errors;
  }

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
                {Object.keys(formErrors).length === 0 && isSubmit ? (navigate("/loginForm/products")): (console.log("error"))}
                <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="نام کاربری"
                  id="fname"
                  name="userName"
                  type="text"
                  value={formValues.userName}
                  onChange = {handleChange}
                />
                <p style={{color: "red", fontSize:"13px",marginTop: "5px"}}>{formErrors.userName}</p>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="رمز عبور"
                  id="pass"
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange = {handleChange}
                />
                <p style={{color: "red", fontSize:"13px",marginTop: "5px"}}>{formErrors.password}</p>
                <div className="text-center pt-1 mb-5 pb-1">
                  {/* <Link to="/loginForm/admin/products"> */}
                    <button
                      className="mb-4 w-100 gradient-custom-2"
                      type="submit"
                    >
                      ورود
                    </button>
                  {/* </Link> */}
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
