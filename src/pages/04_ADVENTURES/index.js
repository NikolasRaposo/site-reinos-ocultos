import Justa from "../../assets/pdfs/ROJustaSolene.pdf";
import Azalen from "../../assets/pdfs/ROSombrasAzalen.pdf";
import fundo01 from "../../assets/img/Banner04.png";
import fundo02 from "../../assets/img/Banner05.png";
import fundo03 from "../../assets/img/Banner06.png";
import fundoMobile01 from "../../assets/img/BannerMobile04.png";
import fundoMobile02 from "../../assets/img/BannerMobile05.png";
import fundoMobile03 from "../../assets/img/BannerMobile06.png";
import DownloadButton from "../../components/02_OBJECTS/DownloadButton/index";
import { Titulo, Banner, Paragrafo, Divisão, Seção, Container } from "./styles";

export default function Index() {
  return (
    <Container cor={"whiteRO"}>
      <Seção
        borda={0}
        justificarConteudo={"center"}
        margemVertical={2}
        margemHorizontal={0}
      >
        <Titulo borda={0} fontSize={1.5} cor={"whiteRO"} alinhamento425={"center"} margemTop425={2}>
          AVENTURAS GRATUITAS
        </Titulo>
      </Seção>
      <Banner borda={0} src={fundoMobile01} />
      <Seção borda={0} imagem={fundo01} margemTopo={2} margemBase={6}>
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={4}
          margemHorizontal={3}
        >
          <Titulo borda={0} fontSize={2.5} tamanhoTotal={60} fontePeso={"bold"}>
            Justa Solene
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.1}
            espacamento={1}
            margemTopo={1}
            tamanhoTotal={100}
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
        borda={0}
        imagem={fundo02}
        margemTopo={6}
        margemBase={6}
        justificarConteudo={"end"}
      >
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={4}
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
            alinhamento425={"left"}
          >
            Sombras de Azalen
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.1}
            espacamento={1}
            margemTopo={1}
            alinhamento={"right"}
            tamanhoTotal={80}
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
      <Seção borda={0} imagem={fundo03} margemTopo={6} margemBase={6}>
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={4}
          margemHorizontal={3}
        >
          <Titulo borda={0} fontSize={2.5} tamanhoTotal={60} fontePeso={"bold"}>
            Zaratrusta
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.1}
            espacamento={1}
            margemTopo={1}
            tamanhoTotal={100}
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
            borda={0}
            fontSize={1.3}
            tamanhoTotal={60}
            margemTopo={1.5}
            fontePeso={"bold"}
          >
            Em Breve (28/10)
          </Titulo>
        </Divisão>
      </Seção>
    </Container>
  );
}
