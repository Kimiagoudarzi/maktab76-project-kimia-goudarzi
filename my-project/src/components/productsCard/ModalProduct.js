import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
// import SweetAlert from 'react-bootstrap-sweetalert';
import Button from "react-bootstrap/Button";
import axios from "axios";

const ModalProduct = ({ setLgShow, lgShow, id }) => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3002/products/${id}`).then((res) => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, [id]);

  // counter
  const increase = () => {
    if (product.stock > counter) {
      setCounter((count) => count + 1);
    } else {
      setCounter(counter);
      // return (
      //   <SweetAlert success title="Woot!" onConfirm={this.hideAlert}>
      //     I did it!
      //   </SweetAlert>
      // );
    }
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
                <img
                  src={`http://localhost:3002/files/${product?.image[0]}`}
                  alt="product-img"
                  className="img-modal"
                />
              </Modal.Body>
              <Modal.Body>{product?.price}</Modal.Body>
            </div>
          </Modal.Body>

          <Modal.Body>
            <Modal.Title>{product?.name}</Modal.Title>
            <hr />
            <p style={{ lineHeight: "36px" }}>{product?.description}</p>

            <div className="d-flex">
              <Modal.Footer>
                {product?.stock ? (
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
                ) : (
                  <Button
                    variant="secondary"
                    className="btn-add-modal"
                    onClick={() => setLgShow(true)}
                    disabled
                  >
                    افزودن به سبد خرید
                    <BsBagDash
                      style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                    />
                  </Button>
                )}
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
