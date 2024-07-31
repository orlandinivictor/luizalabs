import { useEffect, useRef, useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { IComponentProps } from "../../utils/interfaces/Component.interface";

import { Container } from "./styles";

export function Header({ navigate }: IComponentProps) {
  const containerRef = useRef<HTMLElement>(null);

  const [showOptions, setShowOptions] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    if (containerRef && containerRef.current) {
      setHeaderHeight(containerRef.current.clientHeight);
    }
  }, []);

  return (
    <>
      <div style={{ height: headerHeight }} />
      <Container ref={containerRef} showOptions={showOptions}>
        <img src="/logo.svg" alt="Logo Netshoes" />

        <div>
          <button onClick={handleWishlist}>
            <CiHeart />
            <span>Wishlist</span>
          </button>

          <div className="userContainer">
            <button onClick={handleOptionsClick}>
              <FaUserCircle />
            </button>

            <div className="userContent">
              <div className="border" />

              <ul>
                <li>
                  <button onClick={handleOptionsClick}>Entrar</button>
                </li>
                <li>
                  <button onClick={handleOptionsClick}>Minha Conta</button>
                </li>
                <li>
                  <button onClick={handleOptionsClick}>Endereços</button>
                </li>
                <li>
                  <button onClick={handleOptionsClick}>Minha Netshoes</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
