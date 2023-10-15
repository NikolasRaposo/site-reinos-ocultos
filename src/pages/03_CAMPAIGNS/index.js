import fundo01 from "../../assets/img/Banner02.png";
import fundo02 from "../../assets/img/Banner03.png";
//import oculto from "../../assets/img/Prancheta.png";
import LinkButton from "../../components/02_OBJECTS/LinkButton/index";
import { Titulo, Paragrafo, Divisão, Seção, Container } from "./styles";

export default function Index() {
  return (
    <Container cor={"whiteRO"}>
      <Seção
        borda={0}
        justificarConteudo={"center"}
        margemVertical={2}
        margemHorizontal={0}
      >
        <Titulo borda={0} fontSize={1.5} cor={"whiteRO"}>
          CAMPANHAS EM ANDAMENTO
        </Titulo>
      </Seção>
      <Seção borda={0} imagem={fundo01}>
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={5}
          margemHorizontal={3}
        >
          <Titulo borda={0} fontSize={2.5} tamanhoTotal={60} fontePeso={"bold"}>
            Eberron - Relíquias do Passado
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.5}
            espacamento={1}
            margemTopo={1}
            tamanhoTotal={100}
          >
            Em "Eberron: Relíquias do Passado," nossos aventureiros são lançados em um continente mergulhado em uma atmosfera de ex-conflitos militares e instabilidade política. O grupo heterogêneo, formado pelos gnomos trigêmeos Aerron, Gizmo e Knox, o Draconato Sayax, a Forjada Talannah e o Alto-Elfo Mirtilo, une forças em uma jornada através do mundo traiçoeiro de Eberron, situado no intrigante cenário de Khorvaire. Enquanto aventureiros destemidos, eles enfrentam as mais notórias facções criminosas, sendo desafiados a tomar decisões cruciais ao longo da trama.
          </Paragrafo>
        </Divisão>
      </Seção>

      <Seção
        borda={0}
        imagem={fundo02}
        margemTopo={4}
        margemBase={8}
        
        justificarConteudo={"end"}
      >
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={5}
          margemHorizontal={3}
          disposicao={"flex"}
          direcaoConteudo={"column"}
          alinharConteudo={"end"}
        >
          <Titulo
            borda={0}
            fontSize={2.5}
            tamanhoTotal={70}
            fontePeso={"bold"}
            alinhamento={"right"}
          >
            Namar - Entre Mundos
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.5}
            espacamento={1}
            margemTopo={1}
            alinhamento={"right"}
            tamanhoTotal={120}
          >
            "Namar: Entre Mundos" é o cenário principal atualmente desenvolvido por Reinos Ocultos, uma fusão de elementos de Fantasia Medieval e High Fantasy ambientada em Namar, um mundo onde a magia e destemidas criaturas abundam. Nesse cenário, dragões ancestrais de poder inigualável e monstruosidades do passado assombram as terras. Os reinos e planos que entrelaçam o mundo material estão mais uma vez ameaçando a vida de todos os habitantes. Nesse contexto Skyler, Meepo, Mootrak e Erwin protagonizam uma trama épica com o objetivo de evitar que um novo cataclisma reduza o mundo a cinzas. Eles estão determinados a enfrentar os desafios e perigos que Namar apresenta, em uma luta para proteger o mundo da iminente destruição.
          </Paragrafo>
        </Divisão>
      </Seção>
    </Container>
  );
}
