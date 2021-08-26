import { Container, Image } from "react-bootstrap";
import { logoCard } from "../assets/logo";
import { CardStyled } from "../styles/skill";
import ProcessBar from "./process-bar";

const CardSkill = () => {
  return (
    <Container>
      {logoCard.map((logo, index) => {
        return (
          <CardStyled>
            <Image src={`logo/${logo.image}`} key={index} />
            <ProcessBar />
          </CardStyled>
        );
      })}
    </Container>
  );
};

export default CardSkill;
