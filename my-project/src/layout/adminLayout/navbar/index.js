import { NavLink, Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import butterfly from "assets/images/butter.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar className="admin-nav" variant="light">
      <Container className="d-flex">
        <Navbar.Brand className="header-admin-nav">
          <img alt="logo" src={butterfly} className="img-nav" />
          پنل مدیریت میا لند
        </Navbar.Brand>
        <ButtonGroup className=" admin-nav-items">
          <Link to="/loginForm/admin/products">
            <button className="btn-admin-nav">کالا ها</button>
          </Link>
          <Link to="/admin/prices">
            <button className="btn-admin-nav">موجودی و قیمت ها</button>
          </Link>
          <Link to="/admin/orders">
            <button className="btn-admin-nav">سفارش ها</button>
          </Link>
        </ButtonGroup>
        <Link to="/">
          <button type="button" className="btn mr-md-2 mb-md-0 mb-2 btn-back">
            بازگشت به سایت
            <FaAngleLeft />
          </button>
        </Link>
      </Container>
    </Navbar>
  );
};
export default NavBar;
