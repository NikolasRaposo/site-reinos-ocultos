import { Item, Perfil, PerfilTexto } from "./styles";

export default function PerfilRO({ border, img, widthImage, nome, papel, fontSize, ColumnStart, ColumnEnd }) {
  return (
    <>
    <Item
      borda={border}
      gridColumnStart={ColumnStart}
      gridColumnEnd={ColumnEnd}
      textAlign={"center"}
      justifyContent={"end"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Perfil borda={0} src={img} width={widthImage} />

      <PerfilTexto borda={0} fontSize={fontSize} fontePeso={"bold"} width={100}>
        <span> {nome} </span>
        <br />
        {papel}
      </PerfilTexto>
    </Item>
    </>
  );
}
