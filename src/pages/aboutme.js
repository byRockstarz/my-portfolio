import { Badge, Image } from "react-bootstrap";
import { Col, Container, Row } from "reactstrap";
import StyledAboutMe from "../styles/aboutme";

const AboutMe = () => {
  return (
    <Container fluid id="sectionaboutme">
      <Row>
        <StyledAboutMe className="d-flex justify-content-center">
          About{"  "}
          <Badge pill bg="primary">
            Me
          </Badge>
        </StyledAboutMe>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image
            width="250"
            height="250"
            style={{ objectFit: "cover" }}
            src="/profile.jpg"
            roundedCircle
          />
        </Col>
      </Row>
      <Row>
        <StyledAboutMe className="text-center">
          Natthaphon Srikong
        </StyledAboutMe>
      </Row>
      <Row>
        <hr></hr>
      </Row>
      <Row>
        <h5>Date of birth : 29 May 1995</h5>
        <h5>Age : 26 years old</h5>
        <h5>Personality : Responsible, Friendly</h5>
        <h5>Nationality : Thai</h5>
      </Row>
    </Container>
  );
};
export default AboutMe;
