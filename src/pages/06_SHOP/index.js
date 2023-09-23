import styles from "./style.module.css";
import Container from "react-bootstrap/Container";
import Download from "../../components/02_OBJECTS/DownloadPDF/index";
import Justa from "../../assets/pdfs/ROJustaSolene.pdf";
import imgJusta from "../../assets/img/JustaSolene.png"

export default function Index() {
  return (
    <div className={styles.container}>
      <Container fluid className="py-1">
        <h1>Conteúdos Gratuitos</h1>
        <div className={styles.content}>
            <Download Img={imgJusta} PDF={Justa} Nome="Justa Solene v1.0" />
            <Download Img={imgJusta} PDF={Justa} Nome="Justa Solene v1.0" />
            <Download Img={imgJusta} PDF={Justa} Nome="Justa Solene v1.0" />
        </div>
      </Container>
    </div>
  );
}
