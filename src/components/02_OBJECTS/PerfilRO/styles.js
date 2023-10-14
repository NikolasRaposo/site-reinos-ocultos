import styled from "styled-components";

export const Item = styled.div`
  border: ${(props) => `${props.borda}px`} solid red;
  grid-column-start: ${(props) => `${props.gridColumnStart}`};
  grid-column-end: ${(props) => `${props.gridColumnEnd}`};
  width:  ${(props) => `${props.width}em`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  text-align: ${(props) => `${props.alinharTexto}`};
`;

export const Perfil = styled.img`
  border: ${(props) => `${props.borda}px`} solid red;
  width:  ${(props) => `${props.width}%`};
  height: ${(props) => `${props.height}%`};
  border-radius: 50%;
  aspect-ratio: 1/1;
`;

export const PerfilTexto = styled.p`
  border: ${(props) => `${props.borda}px`} solid red;
  width: ${(props) => `${props.tamanhoTotal}`};
  font-size: ${(props) => `${props.fontSize}rem`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  word-spacing: ${(props) => `${props.espacamento}px`};
  text-align: ${(props) => `${props.alinhamento}`};
  font-weight: ${(props) => `${props.fontePeso}`};
`;
