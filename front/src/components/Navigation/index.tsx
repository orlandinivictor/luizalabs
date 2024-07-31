import { MouseEvent } from "react";

import { IComponentProps } from "../../utils/interfaces/Component.interface";

import { Container } from "./styles";

export function Navigation({ navigate, pathname = "" }: IComponentProps) {
  const handleNavigation = (e: MouseEvent<HTMLElement>) => {
    const buttonElement = e.target as HTMLButtonElement;
    navigate("/".concat(buttonElement.getAttribute("data-content") as string));
  };

  return (
    <Container $activecontent={pathname}>
      <button onClick={handleNavigation} data-content="home">
        Home
      </button>
      {!pathname.includes("home") && (
        <>
          <span>/</span>
          <button data-content="wishlist">Wishlist</button>
        </>
      )}
    </Container>
  );
}
