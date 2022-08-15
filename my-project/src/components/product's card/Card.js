import pic2 from "../../assets/images/kerempodr-inlay.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./card.css";



const ProductsCard = (props) => {
  return (
    <div className="card-group-main">
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className="main-card"> 
              <Card.Img variant="top" src={pic2} />
              <Card.Body>
                <Card.Text>
                  نام محصول
                </Card.Text>
                <Card.Title>قیمت محصول</Card.Title>
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
