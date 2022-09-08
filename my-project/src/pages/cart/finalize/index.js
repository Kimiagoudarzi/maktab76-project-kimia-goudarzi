import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import inputImg from "assets/images/inputsimg.jpg";
import "./style.css";

const Finalize = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    date: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "نام الزامی است";
    }
    if (!values.lastname) {
      errors.lastname = "نام خانوادگی الزامی است";
    }
    if (!values.address) {
      errors.address = "آدرس الزامی است";
    }
    if (!values.phone) {
      errors.phone = "تلفن همراه الزامی است";
    } else if (values.phone.length < 11) {
      errors.phone = " شماره همراه باید بیشتر از 11 کاراکتر باشد";
    }
    if (!values.date) {
      errors.date = "تاریخ تحویل الزامی است";
    }
    return errors;
  };

  return (
    <div className="finalize">
      <div className="d-flex">
        <form onSubmit={handleSubmit}>
          <div className="main-finalize">
            <p className="title-final">نهایی کردن خرید</p>
            <div className="firstname-final">
              <label className="firstname-final-label">نام:</label>
              <br />
              <input
                className="firstname-final-input"
                name="firstname"
                type="text"
                value={formValues.firstname}
                onChange={handleChange}
              />
              <p className="errors-finalize">{formErrors.firstname}</p>
            </div>

            <div className="lastname-final">
              <label className="lastname-final-label">نام خانوادگی:</label>
              <br />
              <input
                className="lastname-final-input"
                name="lastname"
                type="text"
                value={formValues.lastname}
                onChange={handleChange}
              />
              <p className="errors-finalize">{formErrors.lastname}</p>
            </div>

            <div className="address-final">
              <label className="address-final-label">آدرس:</label>
              <br />
              <input
                className="address-final-input"
                name="address"
                type="text"
                value={formValues.address}
                onChange={handleChange}
              />
              <p className="errors-finalize">{formErrors.address}</p>
            </div>

            <div className="phone-final">
              <label className="phone-final-label">تلفن همراه:</label>
              <br />
              <input
                className="phone-final-input"
                name="phone"
                type="text"
                value={formValues.phone}
                onChange={handleChange}
              />
              <p className="errors-finalize">{formErrors.phone}</p>
            </div>

            <div className="date-final">
              <label className="date-final-label"> تاریخ تحویل:</label>
              <br />
              <input
                className="date-final-input"
                name="date"
                type="text"
                value={formValues.date}
                onChange={handleChange}
              />
              <p className="errors-finalize">{formErrors.date}</p>
            </div>

            <div>
              {Object.keys(formErrors).length === 0 && isSubmit
                ? navigate("/")
                : console.log("error")}
              <button
                type="submit"
                className="btn-final"
                onClick={() => {
                  window.location.href = "http://localhost:3001";
                }}
              >
                پرداخت
              </button>
            </div>
          </div>
          <img src={inputImg} alt="pic4" className="img-inputs" />
        </form>
      </div>
    </div>
  );
};

export default Finalize;
