import fundo from "../../assets/img/Banner.png";
import letreiro from "../../assets/img/Logo horizontal.svg"
//import oculto from "../../assets/img/Prancheta.png";
import Amanda from "../../assets/img/Jogadores/Amanda.png";
import Camili from "../../assets/img/Jogadores/Camili-site.png";
import Hugo from "../../assets/img/Jogadores/Hugo.png";
import Marcio from "../../assets/img/Jogadores/Nelson-site.png";
import Joao from "../../assets/img/Jogadores/Derik-site.png";
import Nikolas from "../../assets/img/Jogadores/Nikola-site.png";
import Pedro from "../../assets/img/Jogadores/Pedro-site.png";
import LinkButton from "../../components/02_OBJECTS/LinkButton/index";
import AccordionRO from "../../components/02_OBJECTS/AccordionRO/index";
import PerfilRO from "../../components/02_OBJECTS/PerfilRO/index";
import {
  Titulo,
  Paragrafo,
  Divisão,
  Seção,
  Container,
  Grid,
  Letreiro,
  LetreiroLink,
} from "./styles";

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
            espacamento={1}
            margemTopo={1}
            alinhamento={"justify"}
            tamanhoTotal={80}
          >
            somos um conglomerado de universos que se encontram em um gigantesco
            e completo cenário de Fantasia Medieval. Dentro de nossos mundos
            cheios de diversidades e uma pitada de caos, estamos construindo uma
            nova forma de contar uma história, com um cenário de autória
            brasileira e influência de diversas obras literárias.
          </Paragrafo>
          <LinkButton
            margemTopo={3}
            fontFamily={"GothamMedium"}
            fontSize={1.3}
            to="https://www.worldanvil.com/w/namar-darknesshugo"
            text="pergaminho"
            target={"_blank"}
            rel={"noopener noreferrer"}
            bgColorHover={'whiteRO'}
            colorHover={'blackRO'}
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
            margemTopo={-0.2}
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
            espacamento={1}
            margemTopo={1}
            tamanhoTotal={66}
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
        borda={0}
        justificarConteudo={"center"}
        alinharConteudo={"center"}
        espacoTopo={3}
      >
        <LetreiroLink border={0} width={85} href="/campanhas">
        <Letreiro src={letreiro} width={100} />
        </LetreiroLink>
      </Seção>

      <Seção
        borda={0}
        espacoVertical={10}
        espacoHorizontal={0}
        justificarConteudo={"center"}
        alinharConteudo={"center"}
        direcaoConteudo={"column"}
      >
        <Divisão borda={0} tamanhoTotal={46}>
          <Titulo borda={0} fontSize={1.8} alinhamento={"center"}>
            Conheça os "ocultinhos" de Reinos Ocultos, os bravos aventureiros de
            masmorras com dragões. Descubra as mentes criativas por trás de
            nossas suas aventuras e mergulhe nas histórias épicas que são
            criadas.
          </Titulo>
        </Divisão>

        <Grid borda={0} tamanhoTotal={46} margemTopo={4} distanciaLinha={1.3}>
          <PerfilRO
            img={Hugo}
            nome={"Hugo Cavali"}
            papel={"Mestre"}
            ColumnStart={2}
            ColumnEnd={3}
          />
          <PerfilRO
            img={Amanda}
            nome={"Amanda Christine"}
            papel={"Jogadora"}
            ColumnStart={1}
            ColumnEnd={2}
          />
          <PerfilRO
            img={Camili}
            nome={"Camili Pedroso"}
            papel={"Jogadora"}
            ColumnStart={2}
            ColumnEnd={3}
          />
          <PerfilRO
            img={Joao}
            nome={"João Coelho"}
            papel={"Jogador"}
            
            ColumnStart={3}
            ColumnEnd={4}
          />
          <PerfilRO
            img={Marcio}
            nome={"Marcio Clini"}
            papel={"Jogador"}
            ColumnStart={1}
            ColumnEnd={2}
          />
          <PerfilRO
            img={Nikolas}
            nome={"Nikolas Raposo"}
            papel={"Jogador"}
            ColumnStart={2}
            ColumnEnd={3}
          />
          <PerfilRO
            img={Pedro}
            nome={"Pedro Lopes"}
            papel={"Jogador"}
            ColumnStart={3}
            ColumnEnd={4}
          />
        </Grid>
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
