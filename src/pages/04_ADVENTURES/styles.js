import styled from "styled-components";

export const Container = styled.div`
  border: ${(props) => `${props.borda}px`} solid red;
  color: ${(props) => `var(--${props.cor})`};
`;

export const Banner = styled.img`
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
    max-width: 100%;
    height: auto;
  }
`;

export const Seção = styled.section`
  border: ${(props) => `${props.borda}px`} solid red;
  display: flex;
  padding-top: ${(props) => `${props.espacoTopo}em`};
  margin-top: ${(props) => `${props.margemTopo}%`};
  margin-bottom: ${(props) => `${props.margemBase}%`};
  flex-direction: ${(props) => `${props.direcaoConteudo}`};
  flex-wrap: ${(props) => `${props.quebraLinha}`};
  column-gap: ${(props) => `${props.distanciaEntre}em`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.imagem})`};
  margin: ${(props) => `${props.margemVertical}%`}
    ${(props) => `${props.margemHorizontal}%`};
  padding: ${(props) => `${props.espacoVertical}em`}
    ${(props) => `${props.espacoHorizontal}em`};

    @media screen and (max-width: 425px) {
    background-image: none;
  }
`;

export const Divisão = styled.div`
  border: ${(props) => `${props.borda}px`} solid red;
  display: ${(props) => `${props.disposicao}`};
  flex-wrap: ${(props) => `${props.quebraLinha}`};
  flex-direction: ${(props) => `${props.direcaoConteudo}`};
  justify-content: ${(props) => `${props.justificarConteudo}`};
  align-items: ${(props) => `${props.alinharConteudo}`};
  width: ${(props) => `${props.tamanhoTotal}em`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  margin-bottom: ${(props) => `${props.margemBase}em`};
  margin-left: ${(props) => `${props.margemEsquerda}em`};
  margin-right: ${(props) => `${props.margemDireita}em`};
  margin: ${(props) => `${props.margemVertical}em`}
    ${(props) => `${props.margemHorizontal}em`};

    @media screen and (max-width: 425px) {
      align-items: start;
      margin-top: ${(props) => `${props.margemTop425}%`};
      margin: ${(props) => `${props.margemVertical*0.3}em`}
    ${(props) => `${props.margemHorizontal*0.3}em`};
    
  }
`;

export const Titulo = styled.h1`
  border: ${(props) => `${props.borda}px`} solid red;
  font-family: GothamMedium;
  font-weight: ${(props) => `${props.fontePeso}`};
  color: ${(props) => `var(--${props.cor})`};
  width: ${(props) => `${props.tamanhoTotal}%`};
  font-size: ${(props) => `${props.fontSize}vw`};
  padding-right: ${(props) => `${props.limiteTexto}em`};
  margin-top: ${(props) => `${props.margemTopo}%`};
  text-align: ${(props) => `${props.alinhamento}`};

  @media screen and (max-width: 1200px) {
    font-size: ${(props) => `${props.fontSize * 1.5}vw`};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.fontSize * 1.8}vw`};
  }
  @media screen and (max-width: 425px) {
    font-size: ${(props) => `${props.fontSize * 2.5}vw`};
    text-align: ${(props) => `${props.alinhamento425}`};
    width: 72%;
  }
`;

export const Paragrafo = styled.p`
  border: ${(props) => `${props.borda}px`} solid red;
  color: ${(props) => `var(--${props.cor})`};
  width: ${(props) => `${props.tamanhoTotal}%`};
  font-size: ${(props) => `${props.fontSize}vw`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  word-spacing: ${(props) => `${props.espacamento}px`};
  text-align: ${(props) => `${props.alinhamento}`};
  text-align-last: ${(props) => `${props.alinhamentoFinal}`};

  @media screen and (max-width: 1200px) {
    font-size: ${(props) => `${props.fontSize * 1.5}vw`};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.fontSize * 1.8}vw`};
  }
  @media screen and (max-width: 425px) {
    font-size: ${(props) => `${props.fontSize * 2.5}vw`};
    text-align: left;
  }
`;