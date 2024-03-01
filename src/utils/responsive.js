import { css } from "styled-components";

export const BigMobile = (props) => {
  return css`
    @media screen and (max-width: 500px) {
      ${props}
    }
  `;
};

export const SmallMobile = (props) => {
  return css`
    @media screen and (max-width: 420px) {
      ${props}
    }
  `;
};
