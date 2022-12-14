import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/features/cart/CartSlice";
import Button from "react-bootstrap/Button";
import Footer from "layout/userLayoute/footer/index";
import NavBar from "layout/userLayoute/navbar/index";
import Toast from "react-bootstrap/Toast";
import "./aboutProduct.css";
import axios from "axios";

const AboutProduct = ({ productSlice }) => {
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    console.log("counter", counter);
    data["entity"] = counter;
    dispatch(addToCart(data));
  };

  // fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:3002/products/${id}`);
      setProduct(res.data);
    };
    fetchPosts();
  }, [id]);

  // counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
    if (counter <= 1) {
      setCounter(1);
    }
  };

  return (
    <>
      <NavBar />
      <div className="about-main" key={product?.id}>
        <div className="d-flex">
          <div className="about-img-contain">
            <img
              src={`http://localhost:3002/files/${product?.image}`}
              alt="product-img"
              className="about-img"
            />
          </div>
          <div className="about-contain">
            <div>
              <h1>{product?.name}</h1>
              <hr />
              <p>{product?.description}</p>
              <h5>
                ???????? :
                {product?.price
                  ? product?.price
                      .toString()
                      .replace(/\./g, "")
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                  : null}
                ??????????
              </h5>
            </div>
            <div className="d-flex about-button">
              {product?.stock ? (
                <>
                  <Button
                    variant="secondary"
                    className="btn-add-about"
                    onClick={() => {
                      handleAddToCart(product);
                      toggleShowA();
                    }}
                  >
                    ???????????? ???? ?????? ????????
                    <BsBagDash
                      style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                    />
                  </Button>

                  <div className="btn-counter-main-about">
                    {counter < product?.stock ? (
                      <>
                        <button
                          className="btn-counter-about"
                          onClick={increase}
                        >
                          +
                        </button>

                        <span className="counter__output">{counter}</span>
                        <button
                          className="btn-counter-about"
                          onClick={decrease}
                        >
                          -
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn-counter-about"
                          onClick={increase}
                          disabled
                        >
                          +
                        </button>
                        <span className="counter__output">{counter}</span>
                        <button
                          className="btn-counter-about"
                          onClick={decrease}
                        >
                          -
                        </button>
                      </>
                    )}
                  </div>
                  <div className="icon-heart-main">
                    <FaRegHeart className="icon-heart-about" />
                  </div>
                </>
              ) : (
                <div className="d-flex">
                  <Button
                    variant="secondary"
                    className="btn-add-about"
                    disabled
                  >
                    ???????????? ???? ?????? ????????
                    <BsBagDash
                      style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                    />
                  </Button>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      marginLeft: "12rem",
                      color: "red",
                    }}
                  >
                    <p>?????? ???????? ???? ?????? ???????? ???? ?????????? ?????????? ????????</p>
                  </div>
                  <div className="icon-heart-main">
                    <FaRegHeart className="icon-heart-about" />
                  </div>
                </div>
              )}
            </div>
            <hr />
            <div className="icons-about-footer">
              <div className="d-flex">
                <FaRegGem className="i-about" />
                <p style={{ marginRight: "1rem", color: "#666666" }}>
                  ?????????? ?????? ???????? ????????
                </p>
              </div>
              <div className="d-flex">
                <FaCalendarAlt className="i-about" />
                <p style={{ marginRight: "1rem", color: "#666666" }}>
                  ?????? ?????? ?????????? ????????????
                </p>
              </div>
              <div className="d-flex">
                <FaCreditCard className="i-about" />
                <p style={{ marginRight: "1rem", color: "#666666" }}>
                  ???????????? ?????? ??????
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tost */}
      <div style={{direction: "ltr", marginBottom: "6rem", marginLeft: "2rem"}}>
        <Toast show={showA} onClose={toggleShowA} style={{backgroundColor: "#E85A6A", color: "#ffff"}}>
          <Toast.Header>
            <strong className="me-auto"></strong>
          </Toast.Header>
          <Toast.Body style={{direction: "rtl", fontSize: "17px"}}>???????? ???? ?????? ???????? ?????????? ???? </Toast.Body>
        </Toast>
      </div>

      <Footer />
    </>
  );
};

export default AboutProduct;
