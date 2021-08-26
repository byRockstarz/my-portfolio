import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { logoCard } from "../assets/logo";
import { CardStyled, ProgressBarStyled } from "../styles/skill";

const CardSkill = () => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    console.log(progressBar);
  });

  const increamentProgressbar = () => {
    if (progressBar < 100) {
      setProgressBar(progressBar + 10);
    } else return console.log("Full");
  };

  const decreamentProgressBar = () => {
    if (progressBar > 0) {
      setProgressBar(progressBar - 10);
    } else return console.log("Zero");
  };

  return (
    <Container>
      {logoCard.map((logo, index) => {
        return (
          <CardStyled>
            <Image
              src={require("../assets/" + logo.image + ".svg")}
              key={index}
            />
            <ProgressBarStyled animated now={progressBar} />
            <hr />
            <div>
              <Button onClick={decreamentProgressBar}>
                <AiOutlineMinus />
              </Button>{" "}
              <Button onClick={increamentProgressbar}>
                <AiOutlinePlus />
              </Button>
            </div>
          </CardStyled>
        );
      })}
    </Container>
  );
};

export default CardSkill;
