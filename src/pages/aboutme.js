import { Badge, Image } from "react-bootstrap";
import { Col, Container, Row } from "reactstrap";
import StyledAboutMe from "../styles/aboutme";
import data from "../resume.json";
import { motion } from "framer-motion";

const AboutMePage = () => {
  return (
    <Container fluid id="sectionaboutme">
      {data.map((basic, index) => {
        return (
          <Container>
            <Row>
              <motion.div>
                <StyledAboutMe>
                  About{"  "}
                  <Badge pill bg="primary">
                    Me
                  </Badge>
                </StyledAboutMe>
              </motion.div>
            </Row>
            <Row>
              <StyledAboutMe>
                <Image
                  width="250"
                  height="250"
                  style={{ objectFit: "cover" }}
                  src="/profile.jpg"
                  roundedCircle
                />
              </StyledAboutMe>
            </Row>
            <Row>
              <StyledAboutMe>Natthaphon Srikong</StyledAboutMe>
            </Row>
            <StyledAboutMe>
              <h4>Date of birth : {basic.basics.birth}</h4>
              <h4>Age : {basic.basics.age}</h4>
              <h4>Religion : {basic.basics.religion}</h4>
              <h4>
                {" "}
                Language : {basic.languages.firstlanguage} ,{" "}
                {basic.languages.secondlanguage}
              </h4>
              <h4>Contact : {basic.basics.phone}</h4>
              <h4>Email : {basic.basics.email}</h4>
            </StyledAboutMe>
          </Container>
        );
      })}
      ;
    </Container>
  );
};
export default AboutMePage;
