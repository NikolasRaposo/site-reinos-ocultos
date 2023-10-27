import styled from "styled-components";

export const Icone = styled.div`
  border: ${(props) => `${props.border}px`} solid red;
  margin-left: ${(props) => `${props.marginLeft}%`};

  @media screen and (max-width: 768px) {
    margin-left: ${(props) => `${props.marginLeft*0.5}%`};
  }

  @media screen and (max-width: 425px) {
    margin-left: ${(props) => `${props.marginLeft*-0.1}%`};
  }
`;

export const Links = styled.div`
  border: ${(props) => `${props.border}px`} solid red;

  a {
    font-size: ${(props) => `${props.fontSize}rem`};
  }
`;
