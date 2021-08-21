import styled from "styled-components";

const StyledAboutMe = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
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

export default StyledAboutMe;
