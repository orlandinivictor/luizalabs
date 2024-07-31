import { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { LiaStarSolid, LiaStarHalf } from "react-icons/lia";

import { formatCurrency } from "../../utils/formatCurrency";
import { getWishlist } from "../../utils/customLocalStorage";
import type { IProduct } from "../../utils/interfaces/Product.interface";

import { Button, Container, Star } from "./styles";
import { IComponentProps } from "../../utils/interfaces/Component.interface";

interface IProductCard {
  setWishlist?: (wishlist: IProduct[]) => void;
  product: IProduct;
}

const alreadyWishlisted = (code: string): boolean => {
  const wishlist = getWishlist();
  const alreadyWishlisted = wishlist.find((item) => item.code === code);

  return Boolean(alreadyWishlisted);
};

export function ProductCard({
  product,
  setWishlist,
  pathname = "",
}: IProductCard & Pick<IComponentProps, "pathname">) {
  const [isWishlisted, setIsWishlisted] = useState(
    alreadyWishlisted(product.code)
  );

  const handleWishlist = () => {
    const wishlist = getWishlist();

    let updatedWishlist: IProduct[];
    if (alreadyWishlisted(product.code)) {
      updatedWishlist = wishlist.filter((item) => item.code !== product.code);
    } else {
      updatedWishlist = [...wishlist, product];
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    if (setWishlist) setWishlist(updatedWishlist);
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Container>
      <Button
        $isWishlisted={isWishlisted}
        $activecontent={pathname}
        onClick={handleWishlist}
      >
        {pathname.includes("wishlist") ? <MdClose /> : <FaRegHeart />}
      </Button>

      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <div className="pricing">
        <div className="rating">
          <Star
            $filled={product.rating >= 1}
            $halfed={product.rating > 0 && product.rating < 1}
          >
            <LiaStarSolid />
            <LiaStarHalf />
          </Star>
          <Star
            $filled={product.rating >= 2}
            $halfed={product.rating > 1 && product.rating < 2}
          >
            <LiaStarSolid />
            <LiaStarHalf />
          </Star>
          <Star
            $filled={product.rating >= 3}
            $halfed={product.rating > 2 && product.rating < 3}
          >
            <LiaStarSolid />
            <LiaStarHalf />
          </Star>
          <Star
            $filled={product.rating >= 4}
            $halfed={product.rating > 3 && product.rating < 4}
          >
            <LiaStarSolid />
            <LiaStarHalf />
          </Star>
          <Star
            $filled={product.rating >= 5}
            $halfed={product.rating > 4 && product.rating < 5}
          >
            <LiaStarSolid />
            <LiaStarHalf />
          </Star>

          <span>{product.rating.toFixed(1)}</span>
        </div>

        <span className="originalPrice">
          {formatCurrency(product.priceInCents)}
        </span>
        <span className="finalPrice">
          {formatCurrency(product.salePriceInCents)}
        </span>
      </div>
    </Container>
  );
}
