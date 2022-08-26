import { IoIosArrowBack } from "react-icons/io";
import offer from "assets/images/offer.png";
import "./style.css";

const homePishnahad = () => {
  return (
    <>
      <div className="offer">
        <div>
          <img src={offer} className="offer-img" alt="picture" />
          <p className="see-all">
            مشاهده همه <IoIosArrowBack />
          </p>
        </div>
        <div className="off1">
          <img className="off1-img" alt="picture" />
          <p className="off1-txt1">
            ۲۹,۳۰۲,۰۰۰ <span style={{ fontSize: "10px" }}>تومان</span>
            <span className="off1-span">2%</span>
          </p>
          <p className="off1-txt2 ">۲۹,۹۰۰,۰۰۰</p>
        </div>
        <div className="off2">
          <img className="off2-img" alt="picture" />
          <p className="off2-txt1">
            ۴,۰۹۹,۰۰۰ <span style={{ fontSize: "10px" }}>تومان</span>
            <span className="off2-span">11%</span>
          </p>
          <p className="off2-txt2 ">۴,۵۹۰,۰۰۰</p>
        </div>
        <div className="off3">
          <img className="off3-img" alt="picture" />
          <p className="off3-txt1">
            ۲۸,۲۰۰,۰۰۰ <span style={{ fontSize: "10px" }}>تومان</span>
            <span className="off3-span">2%</span>
          </p>
          <p className="off3-txt2 ">۲۸,۹۰۰,۰۰۰</p>
        </div>
        <div className="off4">
          <img className="off4-img" alt="picture" />
          <p className="off4-txt1">
            ۸,۲۹۹,۰۰۰ <span style={{ fontSize: "10px" }}>تومان</span>
            <span className="off4-span">5%</span>
          </p>
          <p className="off4-txt2 ">7,884,050</p>
        </div>
        <div className="off5">
          <img className="off5-img" alt="picture" />
          <p className="off5-txt1">
            ۲,۵۸۶,۰۰۰ <span style={{ fontSize: "10px" }}>تومان</span>
            <span className="off5-span">50%</span>
          </p>
          <p className="off5-txt2 ">۵,۱۶۰,۰۰۰</p>
        </div>
      </div>
    </>
  );
};

export default homePishnahad;
