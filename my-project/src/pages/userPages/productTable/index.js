import { RiRocketLine } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import {Link } from "react-router-dom";
import pic1 from "assets/images/home image card/pic1-table.png";
import pic2 from "assets/images/home image card/pic2-table.png";
import miss from "assets/images/home image card/missdior.jpg";
import consiler from "assets/images/home image card/consiler.png";
import bodySplash from "assets/images/home image card/One.png";
import sweet from "assets/images/home image card/sweat-temptation.jpg";
import palet from "assets/images/home image card/palet.png";
import coco from "assets/images/home image card/coco.png";
import toner from "assets/images/home image card/tonerlafarer.jpg";
import mac from "assets/images/home image card/mac.png";
import poder from "assets/images/home image card/podreflormar.png";
import dior from "assets/images/home image card/dior.png";
import prim from "assets/images/home image card/prim.png";
import argan from "assets/images/home image card/argan.png";

const tableProducts = () => {
  return (
    <div style={{ marginBottom: "8rem" }}>
      <div
        style={{
          width: "1295px",
          backgroundColor: "#941B80",
          marginRight: "310px",
          marginTop: "80px",
          borderRadius: "10px",
          height: "400px",
          border: "none",
          position: "relative",
          display: "flex",
        }}
      >
        <p
          style={{
            position: "absolute",
            marginTop: "30px",
            marginRight: "40px",
            color: "white",
            fontSize: "20px",
          }}
        >
          خدمات ویژه برای اعضای میا لند
        </p>
        <button
          style={{
            position: "absolute",
            marginTop: "90px",
            marginRight: "40px",
            color: "white",
            backgroundColor: "transparent",
            border: "1px solid white",
            borderRadius: "5px",
            width: "95px",
            height: "37px",
          }}
        >
          <span style={{ marginLeft: "4px" }}>عضویت</span>
          <AiOutlineArrowLeft />
        </button>
        <img
          src={pic1}
          style={{
            position: "absolute",
            width: "170px",
            marginTop: "120px",
            marginRight: "90px",
          }}
          alt="picture1"
        />
        <img
          src={pic2}
          style={{
            position: "absolute",
            width: "220px",
            marginTop: "250px",
            marginRight: "50px",
          }}
          alt="picture1"
        />
        <div
          style={{
            position: "absolute",
            width: "450px",
            backgroundColor: "white",
            marginRight: "330px",
            marginTop: "20px",
            height: "360px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <p style={{ marginTop: "20px", display: "flex" }}>
            <FaMoneyCheckAlt
              style={{
                color: "#941B80",
                marginRight: "30px",
                fontSize: "25px",
              }}
            />
            <span
              style={{
                marginRight: "10px",
                fontSize: "17px",
              }}
            >
              هدیه نقدی
            </span>
            <Link to="/perfume" style={{textDecoration: "none"}}>
              <p style={{ marginRight: "200px", color: "#941B80" }}>
                مشاهده همه
                <IoIosArrowBack />
              </p>
            </Link>
          </p>
          <div className="d-flex">
            <div>
              <img
                src={miss}
                style={{
                  width: "95px",
                  marginRight: "40px",
                  marginTop: "10px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={consiler}
                style={{
                  width: "105px",
                  marginRight: "50px",
                  marginTop: "12px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={bodySplash}
                style={{
                  width: "105px",
                  marginRight: "40px",
                  marginTop: "12px",
                }}
                alt="picture1"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={sweet}
                style={{
                  width: "105px",
                  marginRight: "35px",
                  marginTop: "40px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={palet}
                style={{
                  width: "90px",
                  marginRight: "40px",
                  marginTop: "45px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={coco}
                style={{
                  width: "105px",
                  marginRight: "40px",
                  marginTop: "40px",
                }}
                alt="picture1"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "450px",
            backgroundColor: "white",
            marginRight: "798px",
            marginTop: "20px",
            height: "360px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <p style={{ marginTop: "20px", display: "flex" }}>
            <RiRocketLine
              style={{
                color: "#941B80",
                marginRight: "30px",
                fontSize: "25px",
              }}
            />
            <span
              style={{
                marginRight: "5px",
                fontSize: "17px",
              }}
            >
              ارسال فوری
            </span>
            <Link to="/cosmetic" style={{textDecoration: "none"}}>
            <p style={{ marginRight: "200px", color: "#941B80" }}>
              مشاهده همه <IoIosArrowBack />
            </p>
            </Link>
          </p>
          <div className="d-flex">
            <div>
              <img
                src={mac}
                style={{
                  width: "90px",
                  marginRight: "40px",
                  marginTop: "12px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={toner}
                style={{
                  width: "105px",
                  marginRight: "40px",
                  marginTop: "12px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={dior}
                style={{
                  width: "105px",
                  marginRight: "30px",
                  marginTop: "5px",
                }}
                alt="picture1"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={argan}
                style={{
                  width: "105px",
                  marginRight: "40px",
                  marginTop: "30px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={prim}
                style={{
                  width: "95px",
                  marginRight: "30px",
                  marginTop: "30px",
                }}
                alt="picture1"
              />
            </div>
            <div>
              <img
                src={poder}
                style={{
                  width: "100px",
                  marginRight: "30px",
                  marginTop: "30px",
                }}
                alt="picture1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tableProducts;
