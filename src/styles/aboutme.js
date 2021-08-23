import styled from "styled-components";
import { Image } from "react-bootstrap";

export const StyledAboutMe = styled.h1`
  margin-top: 100px;
  margin-bottom: 10px;
  text-align: center;
  & {
    .colorred {
      color: ${(props) => props.inputColor || "palevioletred"};
    }
    .colorblue {
      color: blue;
    }
  }
`;

export const StyledImage = styled(Image)`
  width: 250px;
  height: 250px;
`;
