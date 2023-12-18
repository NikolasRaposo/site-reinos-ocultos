import styled from "styled-components";

export const Espacamento = styled.section`
border: ${(props) => `${props.border}px`} solid red;
height: ${(props) => `${props.height}vw`};
@media screen and (max-width: 425px) {
  height: ${(props) => `${props.height425}vw`};
}
`;