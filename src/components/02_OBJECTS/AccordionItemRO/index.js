import Accordion from "react-bootstrap/Accordion";

export default function AccordionItemRO({ eventKey, header, body }) {
  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body >{body}</Accordion.Body>
      </Accordion.Item>
    </>
  );
}
