import { ContainerStyled, TextStyled } from "../styles/skill";
import CardSkill from "../components/card";
import React from "react";

const SkillPage = () => {
  return (
    <React.Fragment>
      <TextStyled id="sectionskill">Skill</TextStyled>
      <ContainerStyled>
        <CardSkill />
      </ContainerStyled>
    </React.Fragment>
  );
};

export default SkillPage;
