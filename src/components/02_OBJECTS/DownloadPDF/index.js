import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";

export default function Index({ Img, PDF, Nome }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Img} />
        <Card.Body>
          <Card.Title className="fw-bold">{Nome}</Card.Title>
          <Button
            variant="redRO"
            href={PDF}
            download={Nome}
            target="_blank"
            rel="noreferrer"
          >
            Download
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
