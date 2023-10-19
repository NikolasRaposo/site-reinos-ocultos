import { Botao } from "./styles";

export default function LinkButton({
  to,
  text,
  arquivo,
  margemTopo,
  fontSize,
  fontFamily,
  target,
  rel,
  bgColorHover,
  colorHover,
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
      <a href={to} download={arquivo} target={target} rel={rel}>{text}</a>
    </Botao>
  );
}
