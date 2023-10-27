import styled from "styled-components";

export const Item = styled.div`
  border: ${(props) => `${props.borda}px`} solid red;
  display: flex;
  width:  ${(props) => `${props.width}%`};
  grid-column-start: ${(props) => `${props.gridColumnStart}`};
  grid-column-end: ${(props) => `${props.gridColumnEnd}`};
  justify-content: ${(props) => `${props.justifyContent}`};
  flex-direction: ${(props) => `${props.flexDirection}`};
  align-items: ${(props) => `${props.alignItems}`};
  text-align: ${(props) => `${props.textAlign}`};
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
  width: ${(props) => `${props.width}%`};
  font-size: ${(props) => `${props.fontSize}vw`};
  margin-top: ${(props) => `${props.margemTopo}%`};
  word-spacing: ${(props) => `${props.espacamento}px`};
  text-align: ${(props) => `${props.alinhamento}`};

  span {
    font-weight: ${(props) => `${props.fontePeso}`};
  }
  @media screen and (max-width: 425px) {
    font-size: ${(props) => `${props.fontSize*2}vw`};
  }
`;