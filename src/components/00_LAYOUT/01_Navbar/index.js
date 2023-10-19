import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/img/logo_ro.png";
import NavLink from "../../02_OBJECTS/NavLinkRO/index";
import LinkButton from "../../02_OBJECTS/LinkButton/index";
import ScrollTo from "../../02_OBJECTS/ScrollTo/index";
import { Links } from "./styles";


export default function Index() {
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
          <Links fontSize={1.2}>
            <Nav
              variant="underline"
              defaultActiveKey={window.location.pathname}
            >
              <NavLink href="/" text="INICIO" />
              <NavLink href="/campanhas" text="CAMPANHAS" />
              <NavLink href="/aventuras" text="AVENTURAS" />
              <NavLink href="#grupos" text="CONTATO" />
              <ScrollTo href="grupos" text="CONTATO" />
              <Nav.Link href="https://www.twitch.tv/reinosocultosrpg">
                <LinkButton
                  fontFamily={"GothamBook"}
                  to="https://www.twitch.tv/reinosocultosrpg"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  text="LIVE NA TWITCH"
                  bgColorHover={"blackRO"}
                  colorHover={"whiteRO"}
                />
              </Nav.Link>
            </Nav>
          </Links>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
