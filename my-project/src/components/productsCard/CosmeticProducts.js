import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "redux/features/ProductCosmetic";
import { Modal } from "react-bootstrap";
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import pic2 from "../../assets/images/kerempodr-inlay.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./card.css";





const ProductsCard = () => {
  const [lgShow, setLgShow] = useState(false);
  const [counter, setCounter] = useState(0);

  // counter
  
  const increase = () => {
    setCounter(count => count + 1);};

  const decrease = () => {
    setCounter(count => count - 1);};

  // fetch
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
  <>
    <div className="card-group-main">
      <Row xs={1} md={3} className="g-4">
        {products.map((item)=>(
         <Col>
         <Card className="main-card" key={item.id}>
           <Card.Img variant="top" src={pic2} />
           <Card.Body>
             <div onClick={() => setLgShow(true)}>
             <Card.Text style={{fontSize : "22px"}}>{item.name}</Card.Text>
             <Card.Title style={{marginRight: "19.8rem", marginTop : "-1rem"}}>{item.price}</Card.Title>
             </div>
             <Button variant="secondary" className="btn-check-card">
                  جزئیات محصول
            </Button>
           </Card.Body>
         </Card>
       </Col>
        ))}
      </Row>
    </div>
    <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
        <div className="d-flex">
          <Modal.Body>
            <div>
              <Modal.Body id="example-modal-sizes-title-lg">
                <img src={pic2} alt="product-img" className="img-modal"/>
              </Modal.Body>
              <Modal.Body>
                price
              </Modal.Body>
            </div>
          </Modal.Body>

          <Modal.Body>
            <Modal.Title>
              name product
            </Modal.Title>
              <hr/>
            <li>product description</li> 
            <li>product description</li> 
            <li>product description</li> 
            <li>product description</li> 
            <li>product description</li> 
            <li>product description</li> 
            <li>product description</li>
            <li>product description</li> 
            <li>product description</li> 
            <br/>
            <div className="d-flex">
              <Modal.Footer>
                <Button variant="secondary" className="btn-add-modal" onClick={() => setLgShow(true)}>
                  افزودن به سبد خرید
                  <BsBagDash style={{fontSize: "1.3rem", marginRight: "0.5rem"}}/>
                </Button>
                <div className="btn-counter-main">
                  <button className="btn-counter" onClick={increase}>+</button>
                  <span className="counter__output">{counter}</span>
                  <button className="btn-counter" onClick={decrease}>-</button>
                </div>
                <FaRegHeart className="icon-heart"/>
              </Modal.Footer>
            </div>
          </Modal.Body>
        </div>
        
      </Modal>
  </>
  );
};

export default ProductsCard;
