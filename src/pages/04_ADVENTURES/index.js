import Justa from "../../assets/pdfs/ROJustaSolene.pdf";
import Azalen from "../../assets/pdfs/ROSombrasAzalen.pdf";
import fundo01 from "../../assets/img/Banner04.png";
import fundo02 from "../../assets/img/Banner05.png";
import fundo03 from "../../assets/img/Banner06.png";
import fundoMobile01 from "../../assets/img/BannerMobile04.png";
import fundoMobile02 from "../../assets/img/BannerMobile05.png";
import fundoMobile03 from "../../assets/img/BannerMobile06.png";
import DownloadButton from "../../components/02_OBJECTS/DownloadButton/index";
//STYLED COMPONENTS
import {
  Container,
  Seção,
  Titulo,
  Paragrafo,
  Banner,
  Divisão
} from "../styles";

export default function Index() {
  return (
    <Container border={0} color={"whiteRO"}>
      <Seção
        border={0}
        justifyContent={"center"}
        marginY={2}
        marginX={0}
      >
        <Titulo border={0} fontSize={1.5} color={"whiteRO"} textAlign425={"center"} marginTop425={2}>
          AVENTURAS GRATUITAS
        </Titulo>
      </Seção>

      <Banner borda={0} src={fundoMobile01} />

      <Seção border={0} image={fundo01} marginTop={2} marginBottom={6}>
        <Divisão
          border={0}
          width={40}
          width768={48}
          marginY={4}
          marginX={3}
        >
          <Titulo border={0} fontSize={2.5} width={60} fontWeight={"bold"}>
            Justa Solene
          </Titulo>

          <Paragrafo
            border={0}
            fontSize={1.1}
            wordSpacing={1}
            marginTop={1}
          >
            No tempo dos últimos escolhidos, os Reinos Ocultos eram muitos
            planos e carregavam seus segredos distantes. Há 7 anos, tudo mudou.
            Namar e todos os Reinos Ocultos se fundiram e o nosso mundo foi
            redesenhado graças à poderosa magia e a ação de corajosos
            guerreiros...
          </Paragrafo>

          <DownloadButton
            margemTopo={5}
            fontFamily={"GothamMedium"}
            fontSize={1.1}
            to={Justa}
            arquivo="Justa Solene v1_0"
            text="Download"
            bgColorHover={"whiteRO"}
            colorHover={"blackRO"}
          />
        </Divisão>
      </Seção>

      <Banner borda={0} src={fundoMobile02} />

      <Seção
        border={0}
        image={fundo02}
        marginTop={6}
        marginBottom={6}
        justifyContent={"end"}
      >
        <Divisão
          border={0}
          width={40}
          width1200={55}
          width768={65}
          marginY={4}
          marginX={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"end"}
        >
          <Titulo
            border={0}
            fontSize={2.5}
            width={70}
            fontWeight={"bold"}
            textAlign={"right"}
            textAlign425={"left"}
          >
            Sombras de Azalen
          </Titulo>

          <Paragrafo
            border={0}
            fontSize={1.1}
            wordSpacing={1}
            marginTop={1}
            textAlign={"right"}
            width={90}
          >
            Sombras de Azalen é uma aventura e parte de um cenário maior de
            Reinos Ocultos chamado Namar onde os aventureiros irão lidar com um
            mal crescente próximo a antiga cidade chamada “Azalen”...
          </Paragrafo>
          <DownloadButton
            margemTopo={3}
            fontFamily={"GothamMedium"}
            fontSize={1.1}
            to={Azalen}
            arquivo="Sombras de Azalen v1_0"
            text="Download"
            bgColorHover={"whiteRO"}
            colorHover={"blackRO"}
          />
        </Divisão>
      </Seção>

      <Banner borda={0} src={fundoMobile03} />

      <Seção border={0} image={fundo03} marginTop={6} marginBottom={6}>
        <Divisão
          border={0}
          width={40}
          width1200={50}
          width768={60}
          marginY={4}
          marginX={3}
        >
          <Titulo border={0} fontSize={2.5} width={60} fontWeight={"bold"}>
          Zaratrusta
          </Titulo>

          <Paragrafo
            border={0}
            fontSize={1.1}
            wordSpacing={1}
            marginTop={1}
          >
            Prepare-se para adentrar na "Mansão de Zaratrusta," uma experiência
            de terror medieval compacta e claustrofóbica. Neste emocionante
            thriller, você e seus companheiros enfrentarão os horrores ocultos
            por trás das paredes de uma casa amaldiçoada. A cada instante, os
            cômodos da mansão se transformam, revelando novos pesadelos a cada
            virada de esquina. Criaturas de origem paranormal dominam os
            corredores e quartos, tornando cada passo uma luta pela
            sobrevivência. E no centro de tudo isso, uma entidade terrível
            controla os destinos dos aventureiros, desafiando-os a superar seus
            medos e segredos mais sombrios, ou enfrentar um destino aterrador...
          </Paragrafo>

          <Titulo
            border={0}
            fontSize={1.3}
            width={60}
            marginTop={1.5}
            fontWeight={"bold"}
          >
            Em Breve (28/10)
          </Titulo>
        </Divisão>
      </Seção>
    </Container>
  );
}
