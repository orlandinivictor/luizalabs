import { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function Navigation() {
  const navigate = useNavigate();
  const router = useLocation();

  const handleNavigation = (e: MouseEvent<HTMLElement>) => {
    const buttonElement = e.target as HTMLButtonElement;
    navigate("/".concat(buttonElement.getAttribute("data-content") as string));
  };

  return (
    <Container $activecontent={router.pathname}>
      <button onClick={handleNavigation} data-content="home">
        Home
      </button>
      {!router.pathname.includes("home") && (
        <>
          <span>/</span>
          <button data-content="wishlist">Wishlist</button>
        </>
      )}
    </Container>
  );
}
