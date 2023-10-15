import { Link } from "react-router-dom";
import { Botao } from "./styles";

export default function LinkButton({
  to,
  text,
  margemTopo,
  fontSize,
  fontFamily,
  target,
  rel
}) {
  return (
    <Botao
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={"whiteRO"}
      margemTopo={margemTopo}
    >
      <Link target={target} rel={rel} to={to}>{text}</Link>
    </Botao>
  );
}
