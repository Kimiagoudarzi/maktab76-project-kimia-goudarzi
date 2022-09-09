import { Link } from "react-router-dom";
import { useState } from "react";
import ModalProduct from "./ModalProduct";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./card.css";

const ProductsCard = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleShow = (id) => {
    setCurrentId(id);
    setLgShow(true);
  };

  return (
    <>
      <Col>
        <Card className="main-card">
          <div className="img-main-cards">
            <Card.Img variant="top" src={props.src} className="img-card" />
          </div>
          <Card.Body>
            <div onClick={() => handleShow()}>
              <Card.Text style={{ fontSize: "20px" }}>{props.name}</Card.Text>
              <Card.Title
                style={{ marginRight: "14.9rem", marginTop: "-1rem" }}
              >
                {props?.price
                  ? props?.price
                      .toString()
                      .replace(/\./g, "")
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                  : null}
                تومان
              </Card.Title>
            </div>
            <Link to={`/products/${props.itemId}`}>
              <Button variant="secondary" className="btn-check-card">
                جزئیات محصول
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>

      <ModalProduct lgShow={lgShow} setLgShow={setLgShow} id={props.itemId} />
    </>
  );
};

export default ProductsCard;
