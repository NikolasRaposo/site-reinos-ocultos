import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import Container from "react-bootstrap/Container";
//import Footer from "react-bootstrap/Navbar";
import Style from "./style.module.css";

import escrita from "../../../assets/img/Escrita Reinos Ocultos Sem espaco.png";

export default function index() {
  return (
    <footer className={Style.footer}>
      <Container fluid >
      <section className={`ms-5 py-5 col-sm-4`}>
          <p>
              Nosso grupo de RPG é formado por jogadores apaixonados que se
              dedicam a criar histórias incríveis juntos. Se você é novo no
              mundo dos jogos de RPG, não se preocupe: estamos sempre dispostos
              a ajudar a ensinar. Junte-se a nós e descubra um novo universo de
              possibilidades!
            </p>
            <img src={escrita} alt="Reinos Ocultos" className={`img-fluid`} />
            <ul className={Style.social_list}>
              <li>
                <FaTwitch />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
            <p className={Style.copy_right}>
              <span>Reinos Ocultos</span> &copy; 2023
            </p>
        </section>
      </Container>
    </footer>
  );
}
