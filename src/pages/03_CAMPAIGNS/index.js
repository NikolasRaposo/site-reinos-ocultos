import fundo01 from "../../assets/img/Banner02.png";
import fundo02 from "../../assets/img/Banner03.png";
import fundoMobile01 from "../../assets/img/BannerMobile02.png";
import fundoMobile02 from "../../assets/img/BannerMobile03.png";
import {
  Titulo,
  Banner,
  Paragrafo,
  Divisão,
  Seção,
  Container,
  Espacamento,
} from "./styles";

export default function Index() {
  return (
    <Container cor={"whiteRO"}>
      <Espacamento border={0} height={2} height425={5} />
      <Seção
        borda={0}
        justificarConteudo={"center"}
      >
        <Titulo borda={0} fontSize={1.5} cor={"whiteRO"} alinhamento425={"center"} margemTopo425={2}>
          CAMPANHAS EM ANDAMENTO
        </Titulo>
      </Seção>
      <Espacamento border={0} height={2} height425={3} />

      <Banner borda={0} src={fundoMobile01} />

      <Seção borda={0} imagem={fundo01}>
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={0}
          margemHorizontal={3}
        >
          <Titulo borda={0} fontSize={2.5} fontePeso={"bold"} >
            Eberron - Relíquias <br /> do Passado
          </Titulo>
          
          <Paragrafo
            borda={0}
            fontSize={1.5}
            espacamento={1}
            margemTopo={6}
            tamanhoTotal={100}
          >
            Em "Eberron: Relíquias do Passado," nossos aventureiros são lançados
            em um continente mergulhado em uma atmosfera de ex-conflitos
            militares e instabilidade política. O grupo heterogêneo, formado
            pelos gnomos trigêmeos Aerron, Gizmo e Knox, o Draconato Sayax, a
            Forjada Talannah e o Alto-Elfo Mirtilo, une forças em uma jornada
            através do mundo traiçoeiro de Eberron, situado no intrigante
            cenário de Khorvaire. Enquanto aventureiros destemidos, eles
            enfrentam as mais notórias facções criminosas, sendo desafiados a
            tomar decisões cruciais ao longo da trama.
          </Paragrafo>
          <Paragrafo
            borda={0}
            fontSize={1.5}
            espacamento={1}
            margemTopo={2}
            tamanhoTotal={100}
            colorSpan={'redRO'}
          >
            <span>Sessões:</span> sexta às 23h00 e sábado às 15h00.
          </Paragrafo>
        </Divisão>
      </Seção>


      <Espacamento border={0} height={4} height425={10} />

      <Banner borda={0} src={fundoMobile02} />

      <Seção
        borda={0}
        imagem={fundo02}
        justificarConteudo={"end"}
      >
        <Divisão
          borda={0}
          tamanhoTotal={45}
          margemVertical={1}
          margemHorizontal={3}
          disposicao={"flex"}
          direcaoConteudo={"column"}
          alinharConteudo={"end"}
        >
          <Titulo
            borda={0}
            fontSize={2}
            tamanhoTotal={70}
            fontePeso={"bold"}
            alinhamento={"right"}
            alinhamento425={"left"}
          >
            Namar - Entre Mundos
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.5}
            espacamento={1}
            margemTopo={4}
            alinhamento={"right"}
            tamanhoTotal={100}
          >
            "Namar: Entre Mundos" é o cenário principal atualmente desenvolvido
            por Reinos Ocultos, uma fusão de elementos de Fantasia Medieval e
            High Fantasy ambientada em Namar, um mundo onde a magia e destemidas
            criaturas abundam. Nesse cenário, dragões ancestrais de poder
            inigualável e monstruosidades do passado assombram as terras. Os
            reinos e planos que entrelaçam o mundo material estão mais uma vez
            ameaçando a vida de todos os habitantes. Nesse contexto Skyler,
            Meepo, Mootrak e Erwin protagonizam uma trama épica com o objetivo
            de evitar que um novo cataclisma reduza o mundo a cinzas. Eles estão
            determinados a enfrentar os desafios e perigos que Namar apresenta,
            em uma luta para proteger o mundo da iminente destruição.
          </Paragrafo>
          <Paragrafo
            borda={0}
            fontSize={1.5}
            espacamento={1}
            margemTopo={2}
            alinhamento={"right"}
            tamanhoTotal={100}
            colorSpan={'redRO'}
          >
            <span>Sessões:</span> terça às 21h00.
          </Paragrafo>
        </Divisão>
      </Seção>
      <Espacamento border={0} height={4} height425={10} />
    </Container>
  );
}
