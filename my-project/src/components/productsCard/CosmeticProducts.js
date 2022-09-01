import { useEffect, useState } from "react";
// import {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "redux/features/ProductCosmetic";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
import ModalProduct from "./ModalProduct";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./card.css";


const ProductsCard = () => {
  const [lgShow, setLgShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [posts, setPosts] = useState([]);
  // const [pageCount, setPageCount] = useState(0);

  const handleShow = (id)=>{
    setCurrentId(id)
    setLgShow(true)
  }

    // pagination
    // let limit = 15;
  
    // const fetchComments = useCallback(async (currentPage) => {
    //   const res = await fetch(
    //     `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
    //   );
    //   const data = await res.json();
    //   const total = res.headers.get("x-total-count");
    //   setPageCount(Math.ceil(total / limit));
      
    //   setPosts(data);
    //   setCurrentPage(currentPage);
    // }, [limit]);
  
    // useEffect(() => {
    //   fetchComments(1);
    // }, [fetchComments]);
  
  
    // const handlePageClick = async (data) => {
    //   let currentPage = data.selected + 1;
    //   fetchComments(currentPage);
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
                    src={item.image
                      ? `http://localhost:3002/files/${item?.image[0]}`
                      : "-"}
                    className="img-card"
                  />
                </div>
                <Card.Body>
                  <div
                    onClick={() => handleShow(item.id)}
                  >
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
      <ModalProduct lgShow={lgShow} setLgShow={setLgShow} id={currentId} />
    </>
  );
};

export default ProductsCard;
