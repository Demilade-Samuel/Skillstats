import styled from "styled-components";
import { BigMobile } from "../../utils";

export const ButtonContainer = styled.a`
  outline: none;
  border: 2px solid transparent;
  width: 19rem;
  height: 6rem;
  border-radius: 10rem;
  color: ${({ theme, primary }) => (primary ? "white" : theme.colors.black)};
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.generalSans};
  background: ${({ theme, primary }) =>
    primary ? theme.colors.purple : "white"};
  display: flex;
  align-items: center;
  justify-content: center;

  ${BigMobile({
    width: "17.7rem",
    height: "4.4rem",
    fontSize: "1.3rem",
  })}
`;
