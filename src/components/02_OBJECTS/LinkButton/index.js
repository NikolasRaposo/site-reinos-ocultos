import { Link } from "react-router-dom";
import { Botao } from "./styles";

export default function LinkButton({
  to,
  text,
  margemTopo,
  fontSize,
  fontFamily,
  target,
  rel,
  bgColorHover,
  colorHover
}) {
  return (
    <Botao
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={"whiteRO"}
      margemTopo={margemTopo}
      bgColorHover={bgColorHover}
      colorHover={colorHover}
    >
      <Link target={target} rel={rel} to={to}>{text}</Link>
    </Botao>
  );
}
