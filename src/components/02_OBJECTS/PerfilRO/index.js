import { Item, Perfil, PerfilTexto } from "./styles";

export default function PerfilRO({
  img,
  nome,
  papel,
  ColumnStart,
  ColumnEnd,
}) {
  return (
    <Item
      borda={0}
      gridColumnStart={ColumnStart}
      gridColumnEnd={ColumnEnd}
      alinharTexto={"center"}
      width={15.3}
    >
      <Perfil borda={0} src={img} width={60}/>
      <PerfilTexto borda={0} fontSize={1} fontePeso={"bold"}>
        {nome}
      </PerfilTexto>
      <PerfilTexto borda={0} fontSize={1.1} margemTopo={-1}>
        {papel}
      </PerfilTexto>
    </Item>
  );
}
