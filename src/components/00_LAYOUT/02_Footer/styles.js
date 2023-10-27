import styled from "styled-components";

export const Footer = styled.div`
  border: ${(props) => `${props.borda}px`} solid red;
  color: ${(props) => `var(--${props.cor})`};
  background-color:  ${(props) => `var(--${props.fundoCor})`};
  position: relative;
`;

export const Seção = styled.section`
  border: ${(props) => `${props.borda}px`} solid red;
  background-color:  ${(props) => `var(--${props.fundoCor})`};
  position: ${(props) => `${props.position}`};
  display: ${(props) => `${props.display}`};
  overflow: ${(props) => `${props.conteudoOcultado}`};
  flex-direction: ${(props) => `${props.direcaoConteudo}`};
  flex-wrap: ${(props) => `${props.quebraLinha}`};
  column-gap: ${(props) => `${props.distanciaEntre}em`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.imagem})`};
  margin: ${(props) => `${props.margemVertical}em`}
    ${(props) => `${props.margemHorizontal}em`};
  padding: ${(props) => `${props.espacoVertical}em`}
    ${(props) => `${props.espacoHorizontal}em`};
`;

export const Divisão = styled.div`
  border: ${(props) => `${props.borda}px`} solid red;
  display: ${(props) => `${props.disposicao}`};
  overflow: ${(props) => `${props.conteudoOcultado}`};
  flex-wrap: ${(props) => `${props.quebraLinha}`};
  flex-direction: ${(props) => `${props.direcaoConteudo}`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  column-gap: ${(props) => `${props.distanciaEntre}em`};
  width: ${(props) => `${props.tamanhoTotal}em`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  margin-bottom: ${(props) => `${props.margemBase}em`};
  margin-left: ${(props) => `${props.margemEsquerda}em`};
  margin-right: ${(props) => `${props.margemDireita}em`};
  margin: ${(props) => `${props.margemVertical}%`}
    ${(props) => `${props.margemHorizontal}%`};

  svg {
    font-size: ${(props) => `${props.iconSize}em`};
    cursor: pointer;
  }

  svg:hover {
    color: var(--redRO);
  }
`;

export const Titulo = styled.h1`
  border: ${(props) => `${props.borda}px`} solid red;
  font-family: GothamMedium;
  font-weight: ${(props) => `${props.fontePeso}`};
  color: ${(props) => `var(--${props.cor})`};
  width: ${(props) => `${props.tamanhoTotal}%`};
  font-size: ${(props) => `${props.fontSize}em`};
  padding-right: ${(props) => `${props.limiteTexto}em`};
  text-align: ${(props) => `${props.alinhamento}`};
  line-height: ${(props) => `${props.alturaLinha}em`};

  @media screen and (max-width: 425px) {
    font-size: ${(props) => `${props.fontSize*3}vw`};
  }
`;

export const Paragrafo = styled.p`
  border: ${(props) => `${props.borda}px`} solid red;
  font-family: GothamMedium;
  color: ${(props) => `var(--${props.cor})`};
  width: ${(props) => `${props.tamanhoTotal}%`};
  font-size: ${(props) => `${props.fontSize}vw`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  word-spacing: ${(props) => `${props.espacamento}px`};
  text-align: ${(props) => `${props.alinhamento}`};
  line-height: ${(props) => `${props.alturaLinha}em`};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.fontSize*1.8}vw`};
  }

  @media screen and (max-width: 425px) {
    width: ${(props) => `${props.tamanhoTotal*0.7}%`};
    font-size: ${(props) => `${props.fontSize*2.5}vw`};
  }
`;

export const IconeLink = styled.a`
  svg {
    color: var(--blackRO);
  }

  .Twitch {
    margin-top: 5px;
  }
`;

export const LogoFundo = styled.img`
  background-size: cover;
  position: absolute;
  width: ${(props) => `${props.tamanhoTotal}%`};
  top: ${(props) => `${props.distanciaTop}em`};
  left: ${(props) => `${props.distanciaEsquerda}em`};


`;