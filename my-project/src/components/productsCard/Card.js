import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalProduct from "./ModalProduct";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "redux/features/productsCard/ProductsCard"

const ProductsCard = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const handleShow = (id) => {
    setCurrentId(id);
    setLgShow(true);
  };
  const productsCards = useSelector((state)=> state.productsCards.productsCards);
  console.log("*", productsCards);
  useEffect(()=>{
    dispatch(fetchProducts(props.categoryId))
  },[dispatch])

  return (
    <>
      <div className="card-group-main">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="main-card">
              <div className="img-main-cards">
                <Card.Img variant="top" src="" className="img-card" />
              </div>
              <Card.Body>
                <div onClick={() => handleShow()}>
                  <Card.Text style={{ fontSize: "20px" }}>name</Card.Text>
                  <Card.Title
                    style={{ marginRight: "17.6rem", marginTop: "-1rem" }}
                  ></Card.Title>
                </div>
                <Link to={`/products`}>
                  <Button variant="secondary" className="btn-check-card">
                    جزئیات محصول
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <ModalProduct lgShow={lgShow} setLgShow={setLgShow} id={currentId} />
    </>
  );
};

export default ProductsCard;
