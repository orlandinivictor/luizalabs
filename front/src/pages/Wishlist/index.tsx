import { useLayoutEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { ProductCard } from "../../components/ProductCard";

import { getWishlist } from "../../utils/customLocalStorage";
import type { IProduct } from "../../utils/interfaces/Product";

import { PageDefault } from "../../styles";
import { Content } from "./styles";

export function Wishlist() {
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
      <Header />
      <Navigation />

      <Content>
        {wishlist.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            setWishlist={setWishlist}
          />
        ))}
      </Content>
    </PageDefault>
  );
}
