import styled from "styled-components";

export const Botao = styled.div`
  font-size: ${(props) => `${props.fontSize}rem`};
  width: fit-content;
  margin-top: ${(props) => `${props.margemTopo}em`};

  a {
    color: ${(props) => `var(--${props.color})`};
    background-color: var(--redRO);
    padding: 0.4em 1em;
    border-radius: 100px;
    font-family: ${(props) => `${props.fontFamily}`};
    text-decoration: none;
    transition: 0.5s;
    
  }
  a:hover {
    background-color: ${(props) => `var(--${props.bgColorHover})`};
    color: ${(props) => `var(--${props.colorHover})`};
  }
`;
