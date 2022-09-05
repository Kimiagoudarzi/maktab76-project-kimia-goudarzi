import NavBar from "layout/userLayoute/navbar/index";
import HomeSlider from "./homeSlider/index";
import Footer from "layout/userLayoute/footer/index";
import HomeCard from "./homeCard/index";
import ProductStar from "./homeproductstar/index";
import HomePishNahad from "./homepishnahad/index"
import HomeBrand from "./homeBrandfav/index";
import { IoIosArrowDropupCircle } from "react-icons/io";
import TableProduct from "./productTable/index"


import "./home.css";

const Home = () => {
  return (
    <div className="container-app">
      <a name="top" href="#!"></a>
      <NavBar />
      <HomeSlider />
      <HomeBrand/>
      <TableProduct/>
      <HomeCard />
      <HomePishNahad/>
      <ProductStar/>
      <div style={{ marginTop: "60px", marginBottom: "4rem" }}>
        <a
          href="#top"
          style={{
            textDecoration: "none",
            marginRight: "750px",
          }}
        >
          <IoIosArrowDropupCircle className="go-to-top" />
          <span className="go-to-top-txt">بازگشت به بالا</span>
        </a>
      </div>
      <Footer className="footer-app" />
    </div>
  );
};
export default Home;
