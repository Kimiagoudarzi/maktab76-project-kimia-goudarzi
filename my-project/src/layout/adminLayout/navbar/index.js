import { NavLink, Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import butterfly from "assets/images/butter.png";
import "./navbar.css";


const navLinkStyle = ({isActive}) => {
  return {
   backgroundColor: isActive ? '#C065BC' : '#fd2c7a',
   color:'#ffff',
   textDecoration : "none",
   marginRight: '2rem',
   borderRadius: '10px',
   padding: '0.5rem 2rem'
};}

const NavBar = () => {
  return (
    <Navbar className="admin-nav" variant="light">
      <Container className="d-flex">
        <Navbar.Brand className="header-admin-nav">
          <img alt="logo" src={butterfly} className="img-nav" />
          پنل مدیریت میا لند
        </Navbar.Brand>
        <ButtonGroup className=" admin-nav-items">
          <NavLink to="/loginForm/products" style={navLinkStyle}>
           کالا ها
          </NavLink>
          <NavLink to="/admin/prices" style={navLinkStyle}>
            موجودی و قیمت ها
          </NavLink>
          <NavLink to="/admin/orders" style={navLinkStyle}>
            سفارش ها
          </NavLink>
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
