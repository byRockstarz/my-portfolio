import { Badge } from "react-bootstrap";
import { Container, Row } from "reactstrap";
import data from "../resume.json";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { StyledAboutMe, StyledImage } from "../styles/aboutme";

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
                <StyledImage roundedCircle src={profile} />
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
