import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/img/logo_ro.png";

export default function index() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt="Reinos Ocultos"
            src={Logo}
            height="60"
            className="d-inline-block align-top ms-5"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end fw-bold fs-4 me-4">
          <Nav>
            <Nav.Link href="/">
              INICIO
            </Nav.Link>
            <Nav.Link href="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link href="/campanhas">
              CAMPANHAS
            </Nav.Link>
            <Nav.Link href="/sobre">
              SOBRE
            </Nav.Link>
            <Nav.Link href="/contato">
              CONTATO
            </Nav.Link>
            <Nav.Link href="/loja">
              LOJA
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
