import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsBagDash } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { BiBookmarkHeart } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import butterfly from "assets/images/butter.png";
import "./NavBar.css";

const NavBar = () => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: "bold",
    textDecoration: "none",
    backGroundColor: "#fd2c7a",
    color: "black",
  });

  return (
    <>
      <div className="contain">
        <Navbar className="nav" variant="light">
          <Container className="d-flex">
            <Navbar.Brand href="#home" className="parag-nav">
              <Link to="/">
                <img alt="logo" src={butterfly} className="img-nav" />
              </Link>
              میا لند
            </Navbar.Brand>
            <Form className="d-flex">
              <Button className="btn-form" variant="light">
                <BsSearch />
              </Button>
              <Form.Control
                type="search"
                placeholder="محصول مورد نظرتان را جستجو کنید"
                className="search-nav"
                aria-label="Search"
              />
            </Form>
            <Link to="/loginForm">
              <button type="submit" className="rainbow rainbow-5">
                ورود
              </button>
            </Link>
            <button className="btn-bag">
              <Link to="/cart" style={{ color: "#787878" }}>
                <BsBagDash style={{ fontSize: "41", marginBottom: "3" }} />
              </Link>
            </button>
          </Container>
        </Navbar>

        {/* Navbar2 */}

        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3 nav-2">
            <Container fluid>
              <Navbar.Toggle className="nav-toggel" />
              <Navbar.Brand>
                <p className="nav2-prog1">دسته بندی محصولات</p>
              </Navbar.Brand>
              <Navbar.Offcanvas placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>همه محصولات</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>
                      <NavLink to="/cosmetic" style={navLinkStyle}>
                        لوازم آرایشی
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink to="/skin" style={navLinkStyle}>
                        پوست
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink to="/hair" style={navLinkStyle}>
                        مو
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink to="/perfume" style={navLinkStyle}>
                        عطر و ادکلن
                      </NavLink>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
            {/* <div style={{ display: "flex", zIndex: "10" }}>
          <HiOutlineMenu className="offcanvas-icon" />
          <p className="offcanvas-txt">دسته بندی کالاها</p>
          <div className="me-3">|</div>
          <div className="d-flex">
            <AiOutlineFire className="nav-icon" />
            <p className="nav-txt">پرفروش ترین ها</p>
          </div>
          <div className="d-flex">
            <TbDiscount2 className="nav-icon me-3" />
            <p className="nav-txt">تخفیف ها و پیشنهاد ها</p>
          </div>
          <div className="d-flex">
            <BiBookmarkHeart className="nav-icon me-3" />
            <p className="nav-txt">شگفت انگیزها</p>
          </div>
          <div className="d-flex">
            <MdLocationOn className="location-icon" />
            <p className="location-txt">لطفا شهر خود را انتخاب کنید</p>
          </div>
        </div> */}
      
          </Navbar>
        ))}
        </div>
    </>
  );
};

export default NavBar;
