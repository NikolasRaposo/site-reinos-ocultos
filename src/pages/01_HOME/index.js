import fundo from "../../assets/img/Banner.png";
import oculto from "../../assets/img/Prancheta.png";
import LinkButton from "../../components/02_OBJECTS/LinkButton/index";
import AccordionRO from "../../components/02_OBJECTS/AccordionRO/index";
import { Titulo, Paragrafo, Divisão, Seção, Container, Perfil } from "./styles";

export default function Index() {
  return (
    <Container cor={"whiteRO"}>
      <Seção borda={0} imagem={fundo}>
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={5}
          margemHorizontal={3}
        >
          <Titulo borda={0} fontSize={2.5} tamanhoTotal={70} fontePeso={"bold"}>
            Descubra os segredos dos Reinos Ocultos...
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.5}
            espacamento={5}
            margemTopo={1.5}
            alinhamento={"justify"}
          >
            somos um conglomerado de universos que se encontram em um gigantesco
            e completo cenário de Fantasia Medieval. Dentro de nossos mundos
            cheios de diversidades e uma pitada de caos, estamos construindo uma
            nova forma de contar uma história, com um cenário de autória
            brasileira e influência de diversas obras literárias.
          </Paragrafo>
          <LinkButton
            styleConfig={{ marginTop: "4em" }}
            to="/sobre"
            text="entre na masmorra"
          />
        </Divisão>
      </Seção>
      <Seção
        borda={0}
        espacoVertical={5}
        espacoHorizontal={3}
        distanciaEntre={15}
      >
        <Divisão borda={0} tamanhoTotal={90}>
          <AccordionRO />
        </Divisão>
        <Divisão borda={0} tamanhoTotal={100}>
          <Titulo
            borda={0}
            fontSize={2}
            tamanhoTotal={48}
            cor={"redRO"}
            fontePeso={"bold"}
          >
            O universo e histórias de reinos ocultos
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.1}
            espacamento={5}
            margemTopo={1}
            tamanhoTotal={68.5}
            alinhamento={"justify"}
          >
            Há éons passados, emergiu dos recantos misteriosos da história um
            dos primeiros magos que o mundo já conheceu, um ser lendário de nome
            Merlin. Ele mergulhou nas profundezas sedutoras da magia, abraçando
            seu poder com ousadia inigualável. Com coragem e determinação,
            desafiou todos os terrenos conhecidos para um conflito épico e
            tumultuado, que abalou os alicerces da existência e lançou os Reinos
            Ocultos pelo mundo.
          </Paragrafo>
        </Divisão>
      </Seção>

      <Seção
        borda={1}
        espacoVertical={10}
        espacoHorizontal={0}
        justificarConteudo={"center"}
        alinharConteudo={"center"}
        direcaoConteudo={"column"}
      >
        <Divisão borda={1} tamanhoTotal={46}>
          <Titulo borda={0} fontSize={1.8} alinhamento={"center"}>
            Conheça os "ocultinhos" de Reinos Ocultos, os bravos aventureiros de
            masmorras com dragões. Descubra as mentes criativas por trás de
            nossas suas aventuras e mergulhe nas histórias épicas que são
            criadas.
          </Titulo>
        </Divisão>
        <Divisão
          borda={1}
          tamanhoTotal={46}
          disposicao={"flex"}
          justificarConteudo={"center"}
          alinharConteudo={"flex-end"}
          quebraLinha={"wrap"}
        >
          <Perfil src={oculto} />
          <Perfil src={oculto} />
          <Perfil src={oculto} />
          <Perfil src={oculto} />
          <Perfil src={oculto} />
          <Perfil src={oculto} />
        </Divisão>
      </Seção>
    </Container>
  );
}

/*TODO Aumentar a fonte do titulo*/
/*Reduzir a largura do accordion*/

/*Corrigir o espaçamento e o tamanho da fonte*/

/*3X*/
/*ABA DE OCULTINHOS*/
/*Texto tamanho de titulo*/
/*Balão com a foto da pessoa, nome e titulo*/

/*2X*/
/*RODAPÉ*/
