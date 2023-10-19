import styled from "styled-components";

export const Links = styled.div`
  border: ${(props) => `${props.border}px`} solid red;
  margin-right: ${(props) => `${props.marginRight}rem`};

  a {
    font-size: ${(props) => `${props.fontSize}rem`};
    color: var(--blackRO);
  }
  a.INICIO.nav-link.active {
    color: var(--redRO);
  }
  a.CAMPANHAS.nav-link.active {
    color: var(--redRO);
  }
  a.AVENTURAS.nav-link.active {
    color: var(--redRO);
  }
`;
