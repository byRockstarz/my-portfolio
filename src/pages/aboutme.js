import { Badge } from "react-bootstrap";
import { Container, Row } from "reactstrap";
import data from "../resume.json";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { StyledAboutMe, StyledImage, StyledText } from "../styles/aboutme";

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
            <hr />
            <StyledAboutMe>
              <StyledText>Date of birth : {basic.basics.birth}</StyledText>
              <StyledText>Age : {basic.basics.age}</StyledText>
              <StyledText>Religion : {basic.basics.religion}</StyledText>
              <StyledText>
                {" "}
                Language : {basic.languages.firstlanguage} ,{" "}
                {basic.languages.secondlanguage}
              </StyledText>
              <StyledText>Contact : {basic.basics.phone}</StyledText>
              <StyledText>Email : {basic.basics.email}</StyledText>
            </StyledAboutMe>
          </Container>
        );
      })}
      ;
    </Container>
  );
};
export default AboutMePage;
