import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "redux/features/HomeProducts";
import offer from "assets/images/offer.png";
import "./style.css";

const HomePishNahad = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="offer">
        <div>
          <img src={offer} className="offer-img" alt="pic" />
          <Link to="/cosmetic" className="see-all-link">
            <p className="see-all">
              مشاهده همه <IoIosArrowBack />
            </p>
          </Link>
        </div>
        {products.map((item) => (
          <Link to={`/${item.id}`}>
            <div className="off1">
              <img src={item.image} className="off1-img" alt="pic" />
              <p className="off1-txt1">
                {item.price} <span style={{ fontSize: "10px" }}>تومان</span>
                <span className="off1-span">2%</span>
              </p>
              <p className="off1-txt2 ">
                <span className="line-price">215,000</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePishNahad;