import styled from "styled-components";
import { Card, ProgressBar } from "react-bootstrap";

export const TextStyled = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const CardStyled = styled(Card)`
  width: 400px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 10px;
`;

export const ContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageStyled = styled.image`
  height: 250px;
  width: 250px;
`;

export const ProgressBarStyled = styled(ProgressBar)`
  margin-top: 50px;
  width: 70%;
`;
