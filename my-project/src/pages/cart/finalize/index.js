import { Link } from "react-router-dom";
import "./style.css";

const finalize = () => {
  return (
    <>
      <div className="payment-div">
        <Link to="/payment">
          <button className="payment-btn">پرداخت</button>
        </Link>
      </div>
    </>
  );
};

export default finalize;
