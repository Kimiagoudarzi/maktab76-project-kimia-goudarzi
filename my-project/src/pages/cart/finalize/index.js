import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import inputImg from "assets/images/inputsimg.jpg";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./style.css";

const Finalize = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const initialValues = {
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleClick = () => {
    window.location.href = "http://localhost:3001";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

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
              <label className="phone-final-label">زمان سفارش :</label>

              <DatePicker
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                style={{
                  width: "350px",
                  height: "45px",
                  borderRadius: "10px",
                  border: "2px solid #E85A6A",
                }}
              />
            </div>
            <div>
              {Object.keys(formErrors).length !== 0 ? (
                <button type="submit" className="btn-final" disabled>
                  پرداخت
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-final"
                  onClick={() => handleClick()}
                >
                  پرداخت
                </button>
              )}
            </div>
          </div>
          <img src={inputImg} alt="pic4" className="img-inputs" />
        </form>
      </div>
    </div>
  );
};

export default Finalize;
