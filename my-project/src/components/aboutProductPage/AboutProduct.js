import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Footer from "layout/userLayoute/footer/index";
import NavBar from "layout/userLayoute/navbar/index";
import "./aboutProduct.css";
import axios from "axios";

const AboutProduct = () => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState({});
  const {id} = useParams();

  // fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:3002/products/${id}`);
      setProduct(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, [id]);

  // counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
    if (counter < 1) {
      setCounter(0);
    }
  };

  return (
    <>
  
      <NavBar />
        <div className="about-main" key={product?.id}>
          <div className="d-flex">
            <div className="about-img-contain">
              <img src={product?.image} alt="product-img" className="about-img" />
            </div>
            <div className="about-contain">
              <div>
                <h1>{product.name}</h1>
                <hr />
                <p>{product?.description}</p>
                <h5>قیمت :{product?.price} تومان </h5>
              </div>

              <div className="d-flex about-button">
                <Link to="/cart">
                  <Button variant="secondary" className="btn-add-about">
                    افزودن به سبد خرید
                    <BsBagDash
                      style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                    />
                  </Button>
                </Link>
                <div className="btn-counter-main-about">
                  <button className="btn-counter-about" onClick={increase}>
                    +
                  </button>
                  <span className="counter__output">{counter}</span>
                  <button className="btn-counter-about" onClick={decrease}>
                    -
                  </button>
                </div>
                <div className="icon-heart-main">
                  <FaRegHeart className="icon-heart-about" />
                </div>
              </div>
              <hr />
              <div className="icons-about-footer">
                <div className="d-flex">
                  <FaRegGem className="i-about" />
                  <p style={{ marginRight: "1rem", color: "#666666" }}>
                    ضمانت اصل بودن کالا
                  </p>
                </div>
                <div className="d-flex">
                  <FaCalendarAlt className="i-about" />
                  <p style={{ marginRight: "1rem", color: "#666666" }}>
                    هفت روز ضمانت بازگشت
                  </p>
                </div>
                <div className="d-flex">
                  <FaCreditCard className="i-about" />
                  <p style={{ marginRight: "1rem", color: "#666666" }}>
                    پرداخت درب محل
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      <Footer />
    </>
  );
};

export default AboutProduct;
