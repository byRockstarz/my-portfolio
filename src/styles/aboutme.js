import styled from "styled-components";
import { Image } from "react-bootstrap";

export const StyledAboutMe = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;

export const StyledImage = styled(Image)`
  display: block;
  max-width: 250px;
  max-height: 250px;
  width: auto;
  height: auto;
`;

export const StyledText = styled.h3`
  font-weight: 200;
`;
