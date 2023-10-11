import Accordion from "react-bootstrap/Accordion";
import AccordionItemRO from "../AccordionItemRO/index";

export default function AccordionRO() {
  return (
    <>
      <style type="text/css">
        {`
        .accordion {

          --bs-accordion-border-color: var(--grayRO);
          --bs-accordion-bg: var(--blackRO);
          --bs-accordion-color: var(--whiteRO);
          --bs-accordion-btn-bg: var(--blackRO);
          --bs-accordion-btn-color: var(--whiteRO);
          --bs-accordion-btn-focus-box-shadow: none;
          --bs-accordion-active-color: var(--whiteRO);
          --bs-accordion-active-bg: var(--blackRO);
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
          body="A era dos novos escolhidos e da destruição de Merlin como um todo, o início da era de paz com o fim das eras de guerra."
        />
        <AccordionItemRO
          eventKey="2"
          header="ERA ESQUECIDA (4172 PM > 4824 PM)"
          body="Oque deveria ser a quarta era, foi apagada dos registros dos calendários gerais, foi durante este periodo que a magia morre, a volta da magia inicia oque seria a verdadeira quarta era para os Humanos."
        />
        <AccordionItemRO
          eventKey="3"
          header="QUARTA ERA (4845)"
          body="Com a volta da magia e a colisão de Reinos Ocultos, uma era nova se inicia, nova e cheia de mistérios, raças e criaturas nunca antes vistas."
        />
      </Accordion>
    </>
  );
}
