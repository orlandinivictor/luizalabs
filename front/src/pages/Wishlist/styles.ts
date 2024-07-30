import styled from "styled-components";

export const NoLengthMessage = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 3rem;
    fill: #595959;
  }

  h2 {
    text-align: center;
    margin-top: 2rem;
    font-weight: 600;
    font-size: 1.5rem;
    color: #595959;
  }
`;

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
