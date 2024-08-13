import { Row, Col, Card } from "react-bootstrap";

function CuisineComponent() {
  return (
    <div>
        <Row>
      <Col sm={12} md={3} lg={3}>
        <Card
          style={{
            backgroundColor: "#a2c11c",
            color: "white",
            borderRadius: "10px",
            padding: "20px",
            height: "12rem",
            width: "12rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginLeft: "5px",
          }}
        >
          <Card.Link href="#">South Indian</Card.Link>
        </Card>
      </Col>

      <Col sm={12} md={3} lg={3}>
        <Card
          style={{
            backgroundColor: "#cca8e9",
            color: "white",
            borderRadius: "10px",
            padding: "20px",
            height: "12rem",
            width: "12rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginLeft: "5px",
            marginTop: "2px",
          }}
        >
          <Card.Link href="#">North Indian</Card.Link>
        </Card>
      </Col>
      </Row>
    </div>
  );
}

export default CuisineComponent;
