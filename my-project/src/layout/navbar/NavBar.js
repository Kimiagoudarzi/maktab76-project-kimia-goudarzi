import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsBagDash } from "react-icons/bs";
import butterfly from "../../assets/images/butter.png";
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
              <img alt="logo" src={butterfly} className="img-nav" />
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
            <Link to='/admin'>
              <button type="submit" className="rainbow rainbow-5">
                ورود
              </button>
            </Link>
            <button className="btn-bag">
              <Link to="/cart" style={{color: '#787878'}}>
                <BsBagDash style={{ fontSize: "45", marginBottom: "10" }} />
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
                      <NavLink to="/Cosmetic" style={navLinkStyle}>
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
                      <NavLink to="/suncream" style={navLinkStyle}>
                        کرم ضد آفتاب
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
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default NavBar;
