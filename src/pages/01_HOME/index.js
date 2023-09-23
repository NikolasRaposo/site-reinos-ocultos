import styles from "./style.module.css";
import Container from "react-bootstrap/Container";
import LinkButton from "../../components/02_OBJECTS/LinkButton/index";
//import prancheta from "../../assets/img/Prancheta.png";
//import Image from "react-bootstrap/Image";

export default function Index() {
  return (
    <div className={styles.container}>
      <Container fluid className="py-1">
        <section className="ms-5 my-5 col-sm-4">
          <h1 className="me-5 fw-bold">
            Descubra os Segredos dos Reinos Ocultos
          </h1>
          <p className="me-5">
            Você está pronto para uma aventura épica? Então não perca a nossa
            próxima live de RPG! Reúna seus amigos e junte-se a nós para
            explorar mundos fantásticos e lutar contra criaturas assustadoras.
            Com um mestre de jogo habilidoso e um grupo de jogadores
            entusiasmados, essa é uma experiência que você não pode perder!
          </p>
          <LinkButton to="/sobre" text="Saiba Mais" />
        </section>
      </Container>
      <div className={styles.prancheta}></div>
    </div>
  );
}
