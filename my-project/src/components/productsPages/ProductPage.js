import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "components/productsCard/Card";
import Footer from "layout/userLayoute/footer/index";
import NavBar from "layout/userLayoute/navbar/index";
import Row from "react-bootstrap/Row";
import "../productsCard/card.css";
// import { useDispatch, useSelector } from "react-redux";
// import fetchProducts from "redux/features/productsCard/ProductsCard";

const ProductPage = () => {
  const { id } = useParams();
  const [products, setProduct] = useState(null);
  //   const dispatch = useDispatch();
  //   const products = useSelector((state)=> state.products.products)

  //   useEffect(()=>{
  //     dispatch(fetchProducts())
  //   },[])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        `http://localhost:3002/products?category=${id}`
      );
      setProduct(res.data);
      console.log("data", res.data);
    };
    fetchProducts();
  }, [id]);
  return (
    <>
      <NavBar />

      <div className="card-group-main">
        <Row xs={1} md={3} className="g-4">
          {products?.map((el) => (
            <Card
              src={"http://localhost:3002/files/" + el.image[0]}
              name={el.name}
              price={el.price}
              itemId={el.id}
            />
          ))}
        </Row>
      </div>

      <Footer />
    </>
  );
};

export { ProductPage };
