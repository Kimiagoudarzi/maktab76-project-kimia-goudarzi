import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchProductSkin } from "redux/features/ProductSkin";
import pic2 from "../../assets/images/kerempodr-inlay.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./card.css";


const ProductsCard = () => {
  
  const dispatch = useDispatch();
  const productSkin = useSelector((state) => state.productSkin.productSkin);

 
  useEffect(() => {
    dispatch(fetchProductSkin());
  }, [dispatch]);


  return (
    <div className="card-group-main">
      <Row xs={1} md={3} className="g-4">
        {productSkin.map((item)=>(
         <Col>
         <Card className="main-card" key={item.id}>
           <Card.Img variant="top" src={pic2} />
           <Card.Body>
             <Card.Text style={{fontSize : "22px"}}>{item.name}</Card.Text>
             <Card.Title style={{marginRight: "19.8rem", marginTop : "-1rem"}}>{item.price}</Card.Title>
             <Button variant="secondary" className="btn-check-card">
               جزئیات محصول
             </Button>
           </Card.Body>
         </Card>
       </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsCard;