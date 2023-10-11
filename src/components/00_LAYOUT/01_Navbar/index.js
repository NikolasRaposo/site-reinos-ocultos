import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/img/logo_ro.png";
import NavLink from "../../02_OBJECTS/NavLinkRO/index";
import LinkButton from "../../02_OBJECTS/LinkButton/index";
import Style from "./style.module.css"

export default function index() {
  return (
    <Navbar expand="lg" variant="whiteRO">
  
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
        <Navbar.Collapse className="justify-content-end fw-bold me-4">
          <Nav className={Style.navlinkconfig}>
            <NavLink href="/" text="INICIO"/>
            <NavLink href="/blog" text="BLOG"/>
            <NavLink href="/campanhas" text="CAMPANHAS"/>
            <NavLink href="/loja" text="AVENTURAS"/>
            <NavLink href="/contato" text="CONTATO"/>
            <Nav.Link href="/">
              <LinkButton styleConfig={{ fontSize: '.7em' }} to="/sobre" text="LIVE NA TWITCH" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
