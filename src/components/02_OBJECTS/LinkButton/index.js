import { Link } from "react-router-dom";
import { Botao } from "./styles";

export default function LinkButton({
  to,
  text,
  margemTopo,
  fontSize,
  fontFamily,
}) {
  return (
    <Botao
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={"whiteRO"}
      margemTopo={margemTopo}
    >
      <Link to={to}>{text}</Link>
    </Botao>
  );
}
