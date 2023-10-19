import { Link } from "react-scroll";
import { Botao } from "./styles";

export default function NavLink({ href, text }) {
  return (
    <Botao

      color={"whiteRO"}
    >
      <Link to={href} spy={true} smooth={true} offset={50} duration={500}>
      {text}
      </Link>
    </Botao>
  );
}
