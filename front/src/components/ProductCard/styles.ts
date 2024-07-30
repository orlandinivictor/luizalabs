import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 20rem;

  padding: 0.5rem;
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;

  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.5);

  img {
    object-fit: contain;
    height: 60%;
  }

  h2 {
    margin-top: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    color: #595959;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  div.rating {
    display: flex;
    gap: 0.25rem;
    align-items: center;

    span {
      font-size: 0.875rem;
      font-weight: 700;
      margin-left: 0.25rem;
      color: #898989;
    }
  }

  div.pricing {
    display: flex;
    flex-direction: column;

    position: absolute;
    left: 0.75rem;
    bottom: 0.75rem;

    span.originalPrice {
      text-decoration: line-through;
      font-size: 0.875rem;
      color: #adadad;
    }

    span.finalPrice {
      margin-top: -0.25rem;
      font-size: 1.125rem;
      font-weight: 700;
      color: #30006b;
    }
  }
`;

export const Button = styled.button<{
  $isWishlisted: boolean;
  $activecontent: string;
}>`
  background: ${({ $isWishlisted, $activecontent }) =>
    $activecontent.includes("wishlist")
      ? "transparent"
      : $isWishlisted
      ? "#FA0101"
      : "#898989"};
  color: ${({ $activecontent }) =>
    $activecontent.includes("wishlist") ? "#595959" : "white"};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  border-radius: 50%;
  font-size: 1.25rem;

  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

export const Star = styled.div<{ $filled: boolean; $halfed: boolean }>`
  margin-top: 0.1rem;

  svg {
    font-size: 0.875rem;
    fill: ${({ $filled }) => ($filled ? "#E89504" : "#898989")};

    &:last-of-type {
      margin-left: -0.875rem;

      fill: ${({ $halfed }) => ($halfed ? "#E89504" : "transparent")};
    }
  }
`;
