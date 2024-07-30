import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family:"Source Sans 3", sans-serif;
    margin: 0;
    padding: 0;
  }

  button {
    outline: 0;
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;

    cursor: pointer;
    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const PageDefault = styled.main`
  margin-inline: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    margin-inline: 2rem;
  }
`;
