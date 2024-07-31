import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { ProductCard } from "../../components/ProductCard";

import { getWishlist } from "../../utils/customLocalStorage";
import type { IProduct } from "../../utils/interfaces/Product.interface";

import { PageDefault } from "../../styles";
import { Content, NoLengthMessage } from "./styles";

export function Wishlist() {
  const navigate = useNavigate();
  const router = useLocation();
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  const fetchWishlist = async () => {
    const wishlist = getWishlist();
    setWishlist(wishlist);
  };

  useLayoutEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <PageDefault>
      <Header navigate={navigate} />
      <Navigation navigate={navigate} pathname={router.pathname} />

      {!wishlist.length && (
        <NoLengthMessage>
          <FaRegHeart />
          <h2>Você ainda não possui itens salvos na sua Lista de Desejos.</h2>
        </NoLengthMessage>
      )}

      <Content>
        {wishlist.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            setWishlist={setWishlist}
            pathname={router.pathname}
          />
        ))}
      </Content>
    </PageDefault>
  );
}
