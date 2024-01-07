import styled from "styled-components";

/* 01, 02, 03, 04 */
export const Container = styled.div`
    border: ${(props) => `${props.border}px`} solid red;

    color: ${(props) => `var(--${props.color})`};
`;

/* 01, 03, 04 */
export const Seção = styled.section`
    border: ${(props) => `${props.border}px`} solid red;

    background-image: ${(props) => `url(${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: ${(props) => `${props.backgroundPositionX}`};

    display: flex;
    flex-wrap: ${(props) => `${props.flexWrap}`};
    flex-direction: ${(props) => `${props.flexDirection}`};
    column-gap: ${(props) => `${props.columnGap}%`};
    align-items: ${(props) => `${props.alignItems}`};
    vertical-align: ${(props) => `${props.verticalAlign}`};
    justify-content: ${(props) => `${props.justifyContent}`};

    margin: ${(props) => `${props.marginY}%`} ${(props) => `${props.marginX}%`};
    margin-top: ${(props) => `${props.marginTop}%`};
    margin-bottom: ${(props) => `${props.marginBottom}%`};

    padding: ${(props) => `${props.paddingY}%`} ${(props) => `${props.paddingX}%`};
    padding-top: ${(props) => `${props.paddingTop}%`};
    padding-bottom: ${(props) => `${props.paddingBottom}%`};

    @media screen and (max-width: 1200px) {
        background-position-x: ${(props) => `${props.backgroundPositionX1200}`};
    }
    @media screen and (max-width: 768px) {
        background-position-x: ${(props) => `${props.backgroundPositionX768}`};
    }
    @media screen and (max-width: 425px) {
        background-image: none;
    }
`;

/* 01, 03, 04 */
export const Titulo = styled.h1`
    border: ${(props) => `${props.border}px`} solid red;

    font-family: GothamMedium;
    font-weight: ${(props) => `${props.fontWeight}`};
    font-size: ${(props) => `${props.fontSize}vw`};
    text-align: ${(props) => `${props.textAlign}`};
    color: ${(props) => `var(--${props.color})`};
    width: ${(props) => `${props.width}%`};

    margin-top: ${(props) => `${props.marginTop}%`};
    margin-bottom: ${(props) => `${props.marginBottom}%`};
    padding-right: ${(props) => `${props.paddingRight}%`};

    @media screen and (max-width: 1200px) {
        font-size: ${(props) => `${props.fontSize * 1.5}vw`};
    }
    @media screen and (max-width: 768px) {
        font-size: ${(props) => `${props.fontSize * 1.8}vw`};
    }
    @media screen and (max-width: 425px) {
        font-size: ${(props) => `${props.fontSize * 2.5}vw`};
        text-align: ${(props) => `${props.textAlign425}`};
        width: ${(props) => `${props.width425}%`};
        margin-top: ${(props) => `${props.marginTop425}%`};
    }
`;

/* 01, 03, 04 */
export const Paragrafo = styled.p`
    border: ${(props) => `${props.border}px`} solid red;

    color: ${(props) => `var(--${props.color})`};
    width: ${(props) => `${props.width}%`};
    font-size: ${(props) => `${props.fontSize}vw`};
    text-align: ${(props) => `${props.textAlign}`};
    text-align-last: ${(props) => `${props.textAlignLast}`};
    word-spacing: ${(props) => `${props.wordSpacing}px`};

    margin-top: ${(props) => `${props.marginTop}%`};
    margin-bottom: ${(props) => `${props.marginBottom}%`};

    span {
        font-weight: bold;
        color: ${(props) => `var(--${props.colorSpan})`};
    }

    @media screen and (max-width: 1200px) {
        font-size: ${(props) => `${props.fontSize * 1.5}vw`};
    }
    @media screen and (max-width: 768px) {
        font-size: ${(props) => `${props.fontSize * 1.8}vw`};
    }
    @media screen and (max-width: 425px) {
        font-size: ${(props) => `${props.fontSize * 2.5}vw`};
        width: ${(props) => `${props.width425}%`};
        text-align: left;
    }
`;

/* 03, 04 */
export const Banner = styled.img`
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
    max-width: 100%;
    height: auto;
  }
`;

/* 03, 04 */
export const Divisão = styled.div`
    border: ${(props) => `${props.border}px`} solid red;
    display: ${(props) => `${props.display}`};
    flex-wrap: ${(props) => `${props.flexWrap}`};
    flex-direction: ${(props) => `${props.flexDirection}`};
    justify-content: ${(props) => `${props.justifyContent}`};
    align-items: ${(props) => `${props.alignItems}`};
    width: ${(props) => `${props.width}%`};

    margin: ${(props) => `${props.marginY}%`} ${(props) => `${props.marginX}%`};
    margin-top: ${(props) => `${props.marginTop}%`};
    margin-bottom: ${(props) => `${props.marginBottom}%`};
    margin-left: ${(props) => `${props.marginLeft}%`};
    margin-right: ${(props) => `${props.marginRight}%`};

    @media screen and (max-width: 1200px) {
        width: ${(props) => `${props.width1200}%`};
    }

    @media screen and (max-width: 768px) {
        width: ${(props) => `${props.width768}%`};
    }

    @media screen and (max-width: 425px) {
        align-items: start;
        width: 100%;
        margin-top: ${(props) => `${props.margemTop425}%`};
        margin: ${(props) => `${props.margemVertical*0.3}em`} ${(props) => `${props.margemHorizontal*0.3}em`};
    }
`;

export const Grid = styled.div`
  border: ${(props) => `${props.border}px`} solid red;
  width: ${(props) => `${props.width}%`};
  margin-top: ${(props) => `${props.margemTopo}%`};
  display: grid;
  justify-content: ${(props) => `${props.justifyContent}`};
  flex-direction: ${(props) => `${props.flexDirection}`};
  align-items: ${(props) => `${props.alignItems}`};
  row-gap: ${(props) => `${props.rowGap}%`};
  column-gap: ${(props) => `${props.columnGap}%`};

  @media screen and (max-width: 425px) {
    width: ${(props) => `${props.width425}%`};
  }
`;