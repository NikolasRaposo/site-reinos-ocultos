import styled from "styled-components";

export const LinkFormat = styled.div`
  border: ${(props) => `${props.border}px`} solid red;
  margin-right: ${(props) => `${props.marginRight}rem`};
  
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 991px) {
    margin-top: ${(props) => `${props.marginTop}%`};
    margin-bottom: ${(props) => `${props.marginBottom}%`};
  }
`;