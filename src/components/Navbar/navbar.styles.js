import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
`;
export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  padding: 5rem 0;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.inter};
  color: white;

  span {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
