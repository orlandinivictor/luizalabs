import { useEffect, useRef, useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { IComponentProps } from "../../utils/interfaces/Component.interface";

import { Container } from "./styles";

export function Header({ navigate }: IComponentProps) {
  const containerRef = useRef<HTMLElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  useEffect(() => {
    if (containerRef && containerRef.current) {
      setHeaderHeight(containerRef.current.clientHeight);
    }
  }, []);

  return (
    <>
      <div style={{ height: headerHeight }} />
      <Container ref={containerRef}>
        <img src="/logo.svg" alt="Logo Netshoes" />

        <div>
          <button onClick={handleWishlist}>
            <CiHeart />
            <span>Wishlist</span>
          </button>

          <button>
            <FaUserCircle />
          </button>
        </div>
      </Container>
    </>
  );
}
