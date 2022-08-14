import NavBar from "../../../layout/userLayoute/navbar/index";
import HomeSlider from "./HomeSlider/index";
import Footer from "../../../layout/userLayoute/footer/index";
import HomeCard from "./HomeCard/index";

const Home = () => {
  return (
    <div className="container-app">
      <NavBar />
      <HomeSlider />
      <HomeCard />
      <Footer className="footer-app" />
    </div>
  );
};
export default Home;
