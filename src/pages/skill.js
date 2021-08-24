import React, { useEffect, useState } from "react";
import {
  CardStyled,
  ContainerStyled,
  ProgressBarStyled,
  TextStyled,
} from "../styles/skill";
import javascript from "../assets/js.svg";
import reactjs from "../assets/reactjs.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import html from "../assets/html.svg";
import bootstrap from "../assets/bootstrap.svg";
import { Button, Image, ProgressBar, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SkillPage = () => {
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
    <React.Fragment>
      <TextStyled id="sectionskill">Skill</TextStyled>
      <ContainerStyled>
        <CardStyled>
          <Image src={reactjs} />
          <ProgressBarStyled animated now={progressBar} />
          <Button onClick={increamentProgressbar}>
            <AiOutlinePlus />
          </Button>
          <Button onClick={decreamentProgressBar}>
            <AiOutlineMinus />
          </Button>
        </CardStyled>
        <CardStyled>
          <Image src={javascript} />
          <ProgressBarStyled animated now={45} />
        </CardStyled>
        <CardStyled>
          <Image src={css} />
          <ProgressBarStyled animated now={45} />
        </CardStyled>
        <CardStyled>
          <Image src={git} />
          <ProgressBarStyled animated now={45} />
        </CardStyled>
        <CardStyled>
          <Image src={html} />
          <ProgressBarStyled animated now={45} />
        </CardStyled>
        <CardStyled>
          <Image src={bootstrap} />
          <ProgressBarStyled animated now={45} />
        </CardStyled>
      </ContainerStyled>
    </React.Fragment>
  );
};

export default SkillPage;
