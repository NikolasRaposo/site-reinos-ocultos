import styled from "styled-components";

export const OnlyDesktop = styled.div`
  border: ${(props) => `${props.border}px`} solid red;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DivisãoFlex = styled.div`
  border: ${(props) => `${props.border}px`} solid red;
  display: ${(props) => `${props.disposicao}`};
  flex-wrap: ${(props) => `${props.quebraLinha}`};
  flex-direction: ${(props) => `${props.direcaoConteudo}`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  width: ${(props) => `${props.width}%`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  margin-bottom: ${(props) => `${props.margemBase}em`};
  margin-left: ${(props) => `${props.margemEsquerda}em`};
  margin-right: ${(props) => `${props.margemDireita}em`};
  margin: ${(props) => `${props.marginY}%`} ${(props) => `${props.marginX}%`};

  @media screen and (max-width: 768px) {
    width: ${(props) => `${props.width768}%`};
  }

  @media screen and (max-width: 425px) {
    width: ${(props) => `${props.width425}%`};
    margin: ${(props) => `${props.marginY425}%`} ${(props) => `${props.marginX425}%`};
  }
`;

export const GridFlex = styled.div`
  border: ${(props) => `${props.border}px`} solid red;
  width: ${(props) => `${props.width}%`};
  margin-top: ${(props) => `${props.margemTopo}%`};
  display: grid;
  justify-content: ${(props) => `${props.justifyContent}`};
  flex-direction: ${(props) => `${props.flexDirection}`};
  align-items: ${(props) => `${props.alignItems}`};
  row-gap: ${(props) => `${props.rowGap}%`};
  column-gap: ${(props) => `${props.columnGap}%`};

  @media screen and (max-width: 425px) {
    width: ${(props) => `${props.width425}%`};
  }
`;

export const Letreiro = styled.img`
  border: ${(props) => `${props.border}px`} solid red;
  width: ${(props) => `${props.width}%`};
  height: ${(props) => `${props.height}%`};
  cursor: pointer;
`;

export const LetreiroLink = styled.a`
  border: ${(props) => `${props.border}px`} solid red;
  width: ${(props) => `${props.width}%`};
`;
