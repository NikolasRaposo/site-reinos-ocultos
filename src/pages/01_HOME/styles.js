import styled from "styled-components";

export const Container = styled.div`
  border: ${(props) => `${props.border}px`} solid red;
  color: ${(props) => `var(--${props.cor})`};
`;

export const OnlyDesktop = styled.div`
  border: ${(props) => `${props.border}px`} solid red;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Seção = styled.section`
  border: ${(props) => `${props.border}px`} solid red;
  display: flex;
  padding-top: ${(props) => `${props.paddingTop}%`};
  padding-bottom: ${(props) => `${props.paddingBottom}%`};
  flex-direction: ${(props) => `${props.direcaoConteudo}`};
  flex-wrap: ${(props) => `${props.quebraLinha}`};
  column-gap: ${(props) => `${props.distanciaEntre}em`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.imagem})`};
  background-size: cover;
  margin: ${(props) => `${props.margemVertical}em`}
    ${(props) => `${props.margemHorizontal}em`};
  padding: ${(props) => `${props.espacoVertical}em`}
    ${(props) => `${props.espacoHorizontal}em`};

  @media screen and (max-width: 425px) {
    background-image: none;
  }
`;

export const SeçãoFlex = styled.section`
  border: ${(props) => `${props.border}px`} solid red;
  display: flex;
  column-gap: ${(props) => `${props.distanciaEntre}%`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.imagem})`};
  margin: ${(props) => `${props.margemVertical}em`}
    ${(props) => `${props.margemHorizontal}em`};
  padding: ${(props) => `${props.paddingY}%`} ${(props) => `${props.paddingX}%`};

  
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

export const TituloFlex = styled.h1`
  border: ${(props) => `${props.border}px`} solid red;
  font-family: GothamMedium;
  font-weight: ${(props) => `${props.fontWeight}`};
  font-size: ${(props) => `${props.fontSize}vw`};
  color: ${(props) => `var(--${props.color})`};
  margin-top: ${(props) => `${props.marginTop}em`};
  text-align: ${(props) => `${props.textAlign}`};

  @media screen and (max-width: 1200px) {
    font-size: ${(props) => `${props.fontSize * 1.5}vw`};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.fontSize * 1.8}vw`};
  }
  @media screen and (max-width: 425px) {
    font-size: ${(props) => `${props.fontSize * 2.5}vw`};
  }
`;

export const TextoFlex = styled.p`
  border: ${(props) => `${props.border}px`} solid red;
  width: ${(props) => `${props.width}%`};
  font-size: ${(props) => `${props.fontSize}vw`};
  margin-top: ${(props) => `${props.marginTop}%`};
  text-align: ${(props) => `${props.alinhamento}`};

  @media screen and (max-width: 1200px) {
    font-size: ${(props) => `${props.fontSize * 1.5}vw`};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.fontSize * 1.8}vw`};
  }
  @media screen and (max-width: 425px) {
    font-size: ${(props) => `${props.fontSize * 2.5}vw`};
    width: ${(props) => `${props.width425}%`};
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
