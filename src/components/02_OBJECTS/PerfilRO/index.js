import { Item, Perfil, PerfilTexto } from "./styles";

export default function PerfilRO({ img, nome, papel, ColumnStart, ColumnEnd }) {
  return (
    <>
    <Item
      borda={0}
      gridColumnStart={ColumnStart}
      gridColumnEnd={ColumnEnd}
      textAlign={"center"}
      justifyContent={"end"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Perfil borda={0} src={img} width={100} />

      <PerfilTexto borda={0} fontSize={0.85} fontePeso={"bold"} width={100}>
        <span> {nome} </span>
        <br />
        {papel}
      </PerfilTexto>
    </Item>
    </>
  );
}
