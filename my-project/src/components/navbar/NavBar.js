import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch } from "react-icons/bs";
import { BsBagDash } from "react-icons/bs";
import butterfly from "../../images/butter.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
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
              placeholder="محصول مورد نظر خودتان را جستجو کنید"
              className="search-nav"
              aria-label="Search"
            />
          </Form>
          <Button className="btn-login" variant="light">
            ورود
          </Button>
          <button className="btn-bag">
            <BsBagDash style={{ fontSize: "45", marginBottom: "10" }} />
          </button>
        </Container>
      </Navbar>

      {/* Navbar2 */}

      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 nav-2">
          <Container fluid>
            <Navbar.Toggle className="nav-toggel" />
            <Navbar.Brand className="nav2-prog">دسته بندی محصولات</Navbar.Brand>
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>همه محصولات</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">لوازم آرایشی</Nav.Link>
                  <Nav.Link href="#action2"> پوست</Nav.Link>
                  <Nav.Link href="#action1">مو</Nav.Link>
                  <Nav.Link href="#action1">کرم های ضد آفتاب</Nav.Link>
                  <Nav.Link href="#action1"> عطر و ادکلن</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
