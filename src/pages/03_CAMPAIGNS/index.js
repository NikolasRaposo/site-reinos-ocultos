import fundo01 from "../../assets/img/Banner02.png";
import fundo02 from "../../assets/img/Banner03.png";
import fundoMobile01 from "../../assets/img/BannerMobile02.png";
import fundoMobile02 from "../../assets/img/BannerMobile03.png";
//STYLED COMPONENTS
import {
  Container,
  Seção,
  Titulo,
  Paragrafo,
  Banner,
  Divisão
} from "../styles";

import {
  Espacamento
} from "./styles";

export default function Index() {
  return (
    <Container border={0} color={"whiteRO"}>
      <Espacamento border={0} height={2} height425={5} />

      <Seção
        border={0}
        justifyContent={"center"}
      >
        <Titulo border={0} fontSize={1.5} color={"whiteRO"} textAlign425={"center"} marginTop425={2} width425={72}>
          CAMPANHAS EM ANDAMENTO
        </Titulo>
      </Seção>
      <Espacamento border={0} height={2} height425={3} />

      <Banner borda={0} src={fundoMobile01} />


      <Seção border={0} image={fundo01}>
      <Divisão
          border={0}
          width={40}
          width1200={60}
          width768={75}
          marginY={0}
          marginX={3}
        >
          <Titulo border={0} fontSize={2.5} fontWeight={"bold"} >
            Eberron - Relíquias <br /> do Passado
          </Titulo>

          <Paragrafo
            border={0}
            fontSize={1.5}
            wordSpacing={1}
            marginTop={6}
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
            border={0}
            fontSize={1.5}
            wordSpacing={1}
            marginTop={2}
            colorSpan={'redRO'}
          >
            <span>Sessões:</span> sexta às 23h00 e sábado às 15h00.
          </Paragrafo>
        </Divisão>
      </Seção>

      
      <Espacamento border={0} height={4} height425={10} />

      <Banner borda={0} src={fundoMobile02} />

      <Seção
        border={0}
        image={fundo02}
        justifyContent={"end"}
      >
        <Divisão
          border={0}
          width={40}
          width1200={60}
          width768={75}
          marginY={1}
          marginX={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"end"}
        >
          <Titulo
            border={0}
            fontSize={2}
            width={70}
            fontWeight={"bold"}
            textAlign={"right"}
            textAlign425={"left"}
          >
            Namar - Entre Mundos
          </Titulo>
          <Paragrafo
            border={0}
            fontSize={1.5}
            wordSpacing={1}
            marginTop={4}
            textAlign={"right"}
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
            border={0}
            fontSize={1.5}
            wordSpacing={1}
            marginTop={2}
            textAlign={"right"}
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
