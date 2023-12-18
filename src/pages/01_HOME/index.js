//COMPONENTES
import LinkButton from "../../components/02_OBJECTS/LinkButton/index";
import AccordionRO from "../../components/02_OBJECTS/AccordionRO/index";
import PerfilRO from "../../components/02_OBJECTS/PerfilRO/index";
//IMAGEM GERAIS
import fundo from "../../assets/img/Banner.png";
import letreiro from "../../assets/img/Logo horizontal.svg";
//IMAGEM DOS JOGADORES
import Amanda from "../../assets/img/Jogadores/Amanda.png";
import Camili from "../../assets/img/Jogadores/Camili-site.png";
import Hugo from "../../assets/img/Jogadores/Hugo.png";
import Marcio from "../../assets/img/Jogadores/Nelson-site.png";
import Joao from "../../assets/img/Jogadores/Derik-site.png";
import Nikolas from "../../assets/img/Jogadores/Nikola-site.png";
import Pedro from "../../assets/img/Jogadores/Pedro-site.png";
//STYLED COMPONENTS
import {
  Container,
  Seção,
  Titulo,
  Paragrafo
} from "../styles";

import {
  DivisãoFlex,
  GridFlex,
  Letreiro,
  LetreiroLink,
  OnlyDesktop
} from "./styles";

export default function Index() {
  return (
    <Container border={0} color={"whiteRO"}>
      {/*BANNER*/}
      <Seção border={0} image={fundo}>
        <DivisãoFlex
          border={0}
          width={30}
          marginY={4}
          marginX={2.5}
          width425={80}
        >
          <Titulo border={0} fontSize={2.12} fontWeight={"bold"}>
            Descubra os segredos <br />
            dos reinos ocultos...
          </Titulo>

          <Paragrafo border={0} fontSize={1.28} marginTop={4}>
            somos um conglomerado de universos que se encontram em um gigantesco
            e completo cenário de Fantasia Medieval. Dentro de nossos mundos
            cheios de diversidades e uma pitada de caos, estamos construindo uma
            nova forma de contar histórias, com um cenário de autoria
            brasileira e influência de diversas obras literárias.
          </Paragrafo>

          <LinkButton
            margemTopo={10}
            fontFamily={"GothamMedium"}
            fontSize={1}
            to="https://www.worldanvil.com/w/namar-darknesshugo"
            text="pergaminho"
            target={"_blank"}
            rel={"noopener noreferrer"}
            bgColorHover={"whiteRO"}
            colorHover={"blackRO"}
          />
        </DivisãoFlex>
      </Seção>
      {/*ACCORDION*/}
      <Seção border={0} paddingY={5} paddingX={2.5} columnGap={12}>
        <DivisãoFlex border={0} width={100} >
          <AccordionRO />
        </DivisãoFlex>
        <OnlyDesktop>
          <DivisãoFlex
            border={0}
            width={100}
            disposicao={"flex"}
            direcaoConteudo={"column"}
            alinharConteudo={"end"}
          >
            <Titulo
              fontWeight={"bold"}
              border={0}
              fontSize={1.7}
              color={"redRO"}
              marginTop={-0.4}
              textAlign={"right"}
            >
              O universo e histórias <br />
              de Reinos Ocultos
            </Titulo>

            <Paragrafo
              border={0}
              fontSize={0.95}
              marginTop={2}
              textAlign={"right"}
              width={90}
            >
              Há éons passados, emergiu dos recantos misteriosos da história um
              dos primeiros magos que o mundo já conheceu, um ser lendário de
              nome Merlin. Ele mergulhou nas profundezas sedutoras da magia,
              abraçando seu poder com ousadia inigualável. Com coragem e
              determinação, desafiou todos os terrenos conhecidos para um
              conflito épico e tumultuado, que abalou os alicerces da existência
              e lançou os Reinos Ocultos pelo mundo.
            </Paragrafo>
          </DivisãoFlex>
        </OnlyDesktop>
      </Seção>
      {/*LETREIERO*/}
      <Seção
        border={0}
        justifyContent={"center"}
        alignItems={"center"}
        paddingTop={3}
      >
        <LetreiroLink border={0} width={85} href="/campanhas">
          <Letreiro src={letreiro} width={100} />
        </LetreiroLink>
      </Seção>
      {/*OCULTINHOS*/}
      <Seção
        border={0}
        paddingTop={2}
        paddingBottom={10}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <DivisãoFlex border={0} marginY={0} marginX={20} marginY425={0} marginX425={10}>
          <Titulo border={0} fontSize={1.53} textAlign={"center"}>
            Conheça os "ocultinhos" de Reinos Ocultos, os bravos aventureiros de
            masmorras com dragões. Descubra as mentes criativas por trás de
            nossas aventuras e mergulhe nas histórias épicas que são
            criadas.
          </Titulo>
        </DivisãoFlex>
        <GridFlex
          border={0}
          width={40}
          margemTopo={3.5}
          rowGap={5}
          columnGap={10}
          width425={60}
        >
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
        </GridFlex>
      </Seção>
    </Container>
  );
}
