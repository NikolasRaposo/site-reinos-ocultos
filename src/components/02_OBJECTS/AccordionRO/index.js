import Accordion from "react-bootstrap/Accordion";
import AccordionItemRO from "../AccordionItemRO/index";
import oculto from "../../../assets/img/logo.svg";

export default function AccordionRO() {
  return (
    <>
      <style type="text/css">
        {`
        .accordion {
          --bs-accordion-color: var(--whiteRO); /*Cor do texto interior*/
          --bs-accordion-bg: var(--blackRO); /*Cor do fundo do texto interior*/
          /*--bs-accordion-transition: x*/ /*Transição*/
          --bs-accordion-border-color: var(--grayRO); /*Cor da borda do accordion*/
          /*--bs-accordion-border-width: 1px;*/ /*Tamanho da borda do accordion*/
          /*--bs-accordion-border-radius: 5px;*/ /*Arredondamento das pontas da borda do accordion*/
          /*--bs-accordion-inner-border-radius: 50%;*/ /*Arredondamento da borda interior do accordion*/
          /*--bs-accordion-btn-padding-x: 1em;*/ /*Distancia horizontal do texto superior da borda do accordion*/
          /*--bs-accordion-btn-padding-y: 1em;*/ /*Distancia vertical do texto superior da borda do accordion*/
          --bs-accordion-btn-color: var(--whiteRO); /*Cor do texto superior*/
          --bs-accordion-btn-bg: var(--blackRO); /*Cor do fundo do texto superior*/
          /*--bs-accordion-btn-icon: ${oculto};*/ /*icone do accordion fechado*/
          /*--bs-accordion-btn-icon-width: 1em;*/ /*tamanho do icone do accordion*/
          /*--bs-accordion-btn-icon-transform: rotate(180deg);*/ /*rotação do icone do accordion quando abre*/
          /*--bs-accordion-btn-icon-transition: transform .5s ease-in-out;*/ /*tempo para rotação do icone do accordion quando abre*/
          bs-accordion-btn-active-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>"); /*icone do accordion aberto*/
          --bs-accordion-btn-focus-box-shadow: none;
          --bs-accordion-active-color: var(--whiteRO);
          --bs-accordion-active-bg: var(--blackRO);
        }
        .accordion-button::after {
          background-image: var(--bs-accordion-btn-icon);
        }
      `}
      </style>
      <Accordion>
        <AccordionItemRO
          eventKey="0"
          header="SEGUNDA ERA (1546 PM > 2915 PM)"
          body="O fim da guerra contra Merlin gera o início desta era de novos impérios e poderio esquecido."
        />
        <AccordionItemRO
          eventKey="1"
          header="TERCEIRA ERA (2916 PM > 4171 PM)"
          body="A era dos novos escolhidos e da destruição de Merlin como um todo, o início de um período de paz com o fim da guerra.
          "
        />
        <AccordionItemRO
          eventKey="2"
          header="ERA ESQUECIDA (4172 PM > 4824 PM)"
          body="O que deveria ser a quarta era, foi apagada dos registros dos calendários gerais, foi durante este periodo que a magia morre, e é apenas com a volta desta que se inicia a verdadeira quarta era para os Humanos.
          "
        />
        <AccordionItemRO
          eventKey="3"
          header="QUARTA ERA (4845)"
          body="Com a volta da magia e a colisão de Reinos Ocultos, se inicia uma nova era cheia de mistérios, criaturas e desafios nunca antes vistos."
        />
      </Accordion>
    </>
  );
}
