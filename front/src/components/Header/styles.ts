import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;

  background: #8200ff;
  padding: 1.75rem 5rem;

  @media screen and (max-width: 480px) {
    padding: 1rem 1rem;

    img {
      width: 7rem !important;
    }

    div {
      gap: 0.5rem !important;

      button {
        span {
          display: none;
        }
      }
    }
  }

  img {
    width: 14rem;
    height: 100%;
  }

  div {
    display: flex;
    gap: 5rem;

    button {
      display: flex;
      align-items: center;
      color: white;

      svg {
        font-size: 2rem;
      }

      &:has(span) {
        span {
          margin-top: 0.25rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        svg {
          font-size: 2.25rem;
          margin-right: 0.25rem;
        }
      }
    }
  }
`;
