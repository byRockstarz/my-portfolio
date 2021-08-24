import styled from "styled-components";
import { Card } from "react-bootstrap";

export const TextStyled = styled.text`
  text-align: center;
  width: 100%;
  font-size: 50px;
  font-weight: 100;
`;

export const CardStyled = styled(Card)`
  width: 400px;
  height: 500px;
  padding: 20px;
  margin: 10px;
  background-color: #dedede;
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
