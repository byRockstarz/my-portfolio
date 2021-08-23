import React from "react";
import { CardStyled, ContainerStyled, TextStyled } from "../styles/skill";
import javascript from "../assets/js.svg";
import reactjs from "../assets/reactjs.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import html from "../assets/html.svg";
import bootstrap from "../assets/bootstrap.svg";
import { Image } from "react-bootstrap";

const SkillPage = () => {
  return (
    <React.Fragment>
      <TextStyled id="sectionskill">Skill</TextStyled>
      <ContainerStyled>
        <CardStyled>
          <Image src={reactjs} />
        </CardStyled>
        <CardStyled>
          <Image src={javascript} />
        </CardStyled>
        <CardStyled>
          <Image src={css} />
        </CardStyled>
        <CardStyled>
          <Image src={git} />
        </CardStyled>
        <CardStyled>
          <Image src={html} />
        </CardStyled>
        <CardStyled>
          <Image src={bootstrap} />
        </CardStyled>
      </ContainerStyled>
    </React.Fragment>
  );
};

export default SkillPage;
