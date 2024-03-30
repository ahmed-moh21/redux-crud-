import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function BasicExample() {
  //useSelector of cart product
  const cart = useSelector((state) => state.cart);
  return (
    <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Cart App
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="navbar-brand">
              Products
            </NavLink>
            <NavLink to="/cart" className="navbar-brand">
              Cart -{cart.length}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
