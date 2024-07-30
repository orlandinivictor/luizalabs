import styled from "styled-components";

export const Container = styled.nav<{ $activecontent: string }>`
  padding-block: 2.125rem 2rem;
  border-bottom: 1px solid #aaa;

  button {
    text-decoration: none;
    font-size: 1.125rem;
    color: #5c00b3;

    &[data-content="${(props) => props.$activecontent.replace(/\//g, "")}"] {
      font-weight: 700;
    }
  }

  span {
    margin-inline: 0.25rem;
  }
`;
