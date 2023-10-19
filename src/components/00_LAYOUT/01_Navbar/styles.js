import styled from "styled-components";

export const Links = styled.div`
  border: ${(props) => `${props.border}px`} solid red;

  a {
    font-size: ${(props) => `${props.fontSize}rem`};

  }

`;
