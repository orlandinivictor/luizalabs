import styled from "styled-components";

export const Content = styled.div`
  margin-top: 2rem;

  width: 100%;
  padding: 0 5rem;

  display: grid;
  gap: 2.5rem;

  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem;
  }
`;
