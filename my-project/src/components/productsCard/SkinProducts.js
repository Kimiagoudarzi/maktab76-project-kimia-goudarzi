import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchProductSkin } from "redux/features/ProductSkin";
import ModalProduct from "./ModalProduct";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./card.css";


const ProductsCard = () => {
  const [lgShow, setLgShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const handleShow = (id)=>{
    setCurrentId(id)
    setLgShow(true)
  }

  // fetch
  const dispatch = useDispatch();
  const productSkin = useSelector((state) => state.productSkin.productSkin);

 
  useEffect(() => {
    dispatch(fetchProductSkin());
  }, [dispatch]);


  return (
    <>
    <div className="card-group-main">
      <Row xs={1} md={3} className="g-4">
        {productSkin.map((item)=>(
         <Col>
         <Card className="main-card" key={item.id}>
           <Card.Img variant="top" src={item.image} />
           <Card.Body>
             <div onClick={() => handleShow(item.id)}>
             <Card.Text style={{fontSize : "20px"}}>{item.name}</Card.Text>
             <Card.Title style={{marginRight: "17.6rem", marginTop : "-1rem"}}>{item.price}تومان</Card.Title>
             </div>
             <Link to={`/products/${item.id}`}>
                <Button variant="secondary" className="btn-check-card">
                      جزئیات محصول
                </Button>
             </Link>
           </Card.Body>
         </Card>
       </Col>
        ))}
      </Row>
    </div>
    <ModalProduct lgShow={lgShow} setLgShow={setLgShow} id={currentId} />
  </>
  );
};

export default ProductsCard;