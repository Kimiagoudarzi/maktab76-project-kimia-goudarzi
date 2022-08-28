import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ModalProduct = ({setLgShow,lgShow }) => {
    const [counter, setCounter] = useState(0);
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
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        style={{ marginTop: "14rem" }}
      >
        <div className="d-flex">
          <Modal.Body>
            <div>
              <Modal.Body id="example-modal-sizes-title-lg">
                <img src="dddd" alt="product-img" className="img-modal" />
              </Modal.Body>
              <Modal.Body>price</Modal.Body>
            </div>
          </Modal.Body>

          <Modal.Body>
            <Modal.Title>name</Modal.Title>
            <hr />
            <li>product description</li>
            <li>product description</li>
            <li>product description</li>
            <li>product description</li>
            <li>product description</li>
            <li>product description</li>
            <li>product description</li>
            <li>product description</li>
            <li>product description</li>
            <br />
            <div className="d-flex">
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="btn-add-modal"
                  onClick={() => setLgShow(true)}
                >
                  افزودن به سبد خرید
                  <BsBagDash
                    style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                  />
                </Button>
                <div className="btn-counter-main">
                  <button className="btn-counter" onClick={increase}>
                    +
                  </button>
                  <span className="counter__output">{counter}</span>
                  <button className="btn-counter" onClick={decrease}>
                    -
                  </button>
                </div>
                <FaRegHeart className="icon-heart" />
              </Modal.Footer>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ModalProduct;
