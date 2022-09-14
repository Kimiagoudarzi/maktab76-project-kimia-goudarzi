import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import inputImg from "assets/images/inputsimg.png";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
// import TimePicker from "react-multi-date-picker/plugins/time_picker";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";
// import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
import { userForm, getTotals } from "redux/features/cart/CartSlice";
import { FaAngleLeft } from "react-icons/fa";
import "./style.css";

const Finalize = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    address: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [selectedDay, setSelectedDay] = useState(null);

  const renderCustomInput = ({ ref }) => {
    <input
      readOnly
      ref={ref}
      name="expectAt"
      value={
        selectedDay
          ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`
          : ""
      }
    />;
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = () => {
    formValues.totalPrice = state.cart.cartTotalAmount;
    formValues.deliveryTime = "1401/06/06";
    formValues.products = state.cart.cartItems;
    formValues.time = `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`;
    formValues.state = false;
    dispatch(userForm(formValues));
    console.log(formValues, "formValues");
    window.location.href = "http://localhost:3001";
  };

  //const handleTime = (date) => {
  //   setTime(date);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "نام الزامی است";
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
      <div className="d-flex justify-content-start back-div">
        <Link to="/cart">
          <button type="button" className=" btn-back-cart">
            بازگشت به سبد خرید
            <FaAngleLeft />
          </button>
        </Link>
      </div>
      <div className="d-flex">
        <form onSubmit={handleSubmit}>
          <div className="main-finalize">
            <p className="title-final">نهایی کردن خرید</p>
            <div className="lastname-final">
              <label className="lastname-final-label">
                نام و نام خانوادگی:
              </label>
              <br />
              <input
                className="lastname-final-input"
                name="username"
                type="text"
                value={formValues.username}
                onChange={handleChange}
              />
              <p className="errors-finalize">{formErrors.username}</p>
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
                renderInput={renderCustomInput}
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
                inputPlaceholder="یک روز را انتخاب کنید..."
                calendarPopperPosition="bottom"
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
