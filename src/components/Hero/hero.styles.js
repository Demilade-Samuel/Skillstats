import styled from "styled-components";
import { BigMobile } from "../../utils";

export const HeroSection = styled.section`
  width: 100%;
`;
export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  padding-bottom: 15rem;

  ${BigMobile({
    padding: "0 3rem 15rem 3rem",
  })}
`;

export const FirstContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;

  img {
    ${BigMobile({
      width: "100%",
    })}
  }

  h1 {
    font-size: 5.2rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.font.inter};

    ${BigMobile({
      fontSize: "2.4rem",
      lineHeight: "4rem",
    })}

    span {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 3rem;

    ${BigMobile({
      fontSize: "1.4rem",
      lineHeight: "2.2rem",
    })}
  }
`;

export const Gradient = styled.div`
  background: linear-gradient(90deg, #7653f8, #32ae46);
  width: 19.3rem;
  height: 6.3rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  ${BigMobile({
    width: "18.1rem",
    height: "4.7rem",
  })}
`;

export const SecondContainer = styled.div`
  max-width: 120rem;

  img {
    width: 100%;
  }
`;

export const ThirdContainer = styled.div`
  max-width: 84rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;

  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    background: linear-gradient(
      to right,
      #7653f8 0%,
      #2ed320 80%,
      #bad320 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ${BigMobile({
      fontSize: "1.3rem",
    })}
  }
  h1 {
    font-weight: 600;
    font-size: 4.8rem;

    ${BigMobile({
      fontSize: "2.4rem",
      lineHeight: "4rem",
    })}
  }
  p {
    color: ${({ theme }) => theme.colors.subWhite};
    line-height: 3rem;

    ${BigMobile({
      fontSize: "1.4rem",
      lineHeight: "2.7rem",
    })}
  }
`;

export const FourthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  img {
    width: 100%;
  }
`;
