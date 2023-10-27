import {
  Footer,
  Titulo,
  Seção,
  Divisão,
  Paragrafo,
  IconeLink,
  LogoFundo,
} from "./styles";
import oculto from "../../../assets/img/Simbolo site.svg";
import { PiTiktokLogoFill } from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";
import { FaTwitch } from "react-icons/fa";
import LinkButton from "../../02_OBJECTS/LinkButton";

export default function index() {
  return (
    <Footer borda={0} fundoCor={"whiteRO"} id="grupos">
      <Seção borda={0} conteudoOcultado={"hidden"} position={"relative"}>
        <Divisão
          borda={0}
          tamanhoTotal={43}
          margemVertical={5}
          margemHorizontal={2.5}
        >
          <Titulo
            borda={0}
            tamanhoTotal={43}
            fontePeso={"bold"}
            fontSize={4}
            alturaLinha={1}
          >
            Seja um ocultinho
          </Titulo>
          <Paragrafo
            borda={0}
            fontSize={1.53}
            margemTopo={1}
            tamanhoTotal={70}
            alturaLinha={1.2}
          >
            entre em contato ou participe de nossas comunidades no telegram,
            whatsapp ou discord.
          </Paragrafo>

          <Divisão
            borda={0}
            disposicao={"flex"}
            alinharConteudo={"center"}
            distanciaEntre={"2"}
            iconSize={1.4}
            margemTopo={3}
          >
            <LinkButton
              fontSize={1.3}
              fontFamily={"GothamMedium"}
              to="https://linktr.ee/reinosocultos"
              target={"_blank"}
              rel={"noopener noreferrer"}
              text="grupos"
              bgColorHover={'blackRO'}
              colorHover={'whiteRO'}
            />

            <IconeLink
              href="https://www.twitch.tv/reinosocultosrpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitch className='Twitch'/>
            </IconeLink>
            <IconeLink
              href="https://www.tiktok.com/@reinosocultosrpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiTiktokLogoFill />
            </IconeLink>
            <IconeLink
              href="https://www.instagram.com/reinosocultos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram />
            </IconeLink>
          </Divisão>
        </Divisão>

        <LogoFundo
          tamanhoTotal={40}
          distanciaTop={-8}
          distanciaEsquerda={67}
          src={oculto}
        />
      </Seção>
      <Seção
        borda={0}
        justificarConteudo={"center"}
        fundoCor={"blackRO"}
        display={"flex"}
      >
        <Divisão borda={0}>
          <Paragrafo
            borda={0}
            fontSize={1}
            margemTopo={1}

            cor={"whiteRO"}
          >
            2023 &copy; Reinos Ocultos
          </Paragrafo>
        </Divisão>
      </Seção>
    </Footer>
  );
}
