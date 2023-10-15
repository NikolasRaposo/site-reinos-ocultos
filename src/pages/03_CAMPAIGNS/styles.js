import styled from "styled-components";

export const Container = styled.div`
  border: ${(props) => `${props.borda}px`} solid red;
  color: ${(props) => `var(--${props.cor})`};
`;

export const Seção = styled.section`
  border: ${(props) => `${props.borda}px`} solid red;
  display: flex;
  padding-top: ${(props) => `${props.espacoTopo}em`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  margin-bottom: ${(props) => `${props.margemBase}em`};
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
`;

export const Titulo = styled.h1`
  border: ${(props) => `${props.borda}px`} solid red;
  font-family: GothamMedium;
  font-weight: ${(props) => `${props.fontePeso}`};
  color: ${(props) => `var(--${props.cor})`};
  width: ${(props) => `${props.tamanhoTotal}%`};
  font-size: ${(props) => `${props.fontSize}em`};
  padding-right: ${(props) => `${props.limiteTexto}em`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  text-align: ${(props) => `${props.alinhamento}`};
`;

export const Paragrafo = styled.p`
  border: ${(props) => `${props.borda}px`} solid red;
  color: ${(props) => `var(--${props.cor})`};
  width: ${(props) => `${props.tamanhoTotal}%`};
  font-size: ${(props) => `${props.fontSize}rem`};
  margin-top: ${(props) => `${props.margemTopo}em`};
  word-spacing: ${(props) => `${props.espacamento}px`};
  text-align: ${(props) => `${props.alinhamento}`};
  text-align-last: ${(props) => `${props.alinhamentoFinal}`};
`;