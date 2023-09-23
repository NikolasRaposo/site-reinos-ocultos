//REACT
import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
//STYLES
import styles from "./Card.module.css";
import Button from "react-bootstrap/Button";
import Cardb from "react-bootstrap/Card";

export default function Card({ id, cardTitle, cardText, tag, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div class="col">
      <Cardb className="h-100" style={{ width: "18rem" }}>
        <Cardb.Img variant="top" src="https:via.placeholder.com/100x180" />
        <Cardb.Body>
          <Cardb.Title>{cardTitle}</Cardb.Title>
          <Cardb.Subtitle className="mb-2 text-muted">{tag}</Cardb.Subtitle>
          <Cardb.Text>{cardText}</Cardb.Text>
          
          <Link className="btn btn-primary" to={`/artigo/${id}`}>
            <BsPencil /> Editar
          </Link>
          <Button variant="primary" onClick={remove}>
            <BsFillTrashFill /> Excluir
          </Button>
        </Cardb.Body>
      </Cardb>
    </div>
  );
}
