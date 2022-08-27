import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "redux/features/ProductCosmetic";
import { Modal } from "react-bootstrap";
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import pic2 from "../../assets/images/kerempodr-inlay.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./card.css";

const ProductsCard = () => {
  const [lgShow, setLgShow] = useState(false);
  const [counter, setCounter] = useState(0);
  // const [posts, setPosts] = useState([]);
  // const [pageCount, setPageCount] = useState(0);

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
  // pagination

  // let limit = 15;

  // useEffect(() => {
  //   const getComments = async () => {
  //     const res = await fetch(
  //       `http://localhost:3002/products?_page=1&_limit=${limit}`
  //     );
  //     const data = await res.json();
  //     const total = res.headers.get("x-total-count");
  //     setPageCount(Math.ceil(total / limit));
  //     setPosts(data);
  //   };
  //   getComments();
  // }, [limit]);

  // const fetchComments = async (currentPage) => {
  //   const res = await fetch(
  //     `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  // const handlePageClick = async (data) => {
  //   let currentPage = data.selected + 1;

  //   const commentsFormServer = await fetchComments(currentPage);
  //   setPosts(commentsFormServer);
  // };

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
          {products.map((item) => (
            <Col>
              <Card className="main-card" key={item.id}>
                <div className="img-main-cards">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="img-card"
                  />
                </div>
                <Card.Body>
                  <div onClick={() => setLgShow(true)}>
                    <Card.Text style={{ fontSize: "20px" }}>
                      {item.name}
                    </Card.Text>
                    <Card.Title
                      style={{ marginRight: "17.6rem", marginTop: "-1rem" }}
                    >
                      {item.price}تومان
                    </Card.Title>
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
      {/* <ReactPaginate
        previousLabel={"قبلی"}
        nextLabel={"بعدی"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      /> */}
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
                <img src={pic2} alt="product-img" className="img-modal" />
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

export default ProductsCard;
