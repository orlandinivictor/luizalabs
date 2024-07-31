import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { ProductCard } from ".";

const productMock = {
  code: "3R2-0087-240-02",
  name: "Kit 4 Camiseta Masculina Segunda Pele Proteção Solar UV Térmica Praia Manga Longa Blusa Camisa - Cinza+Azul",
  available: false,
  visible: true,
  details: {
    name: "Kit 4 Camiseta Masculina Segunda Pele Proteção Solar UV Térmica Praia Manga Longa Blusa Camisa - Cinza+Azul",
    description:
      "As camisetas proteção UV masculina da Dellas, são produzidas em 100% Poliéster, permitindo movimentos mais intensos, e por um maior tempo de forma confortável. Elas se ajustam perfeitamente ao corpo, podendo ser usadas como segunda pele.",
  },
  priceInCents: "20000",
  salePriceInCents: "8690",
  rating: 3.5,
  image:
    "https://static.netshoes.com.br/produtos/kit-4-camiseta-masculina-segunda-pele-protecao-solar-uv-termica-praia-manga-longa-blusa-camisa/40/3R2-0087-240/3R2-0087-240_zoom1.jpg?ts=1690411979?ims=544x",
  stockAvailable: false,
};

describe("ProductCard Tests", () => {
  it("match snapshot", () => {
    const domTree = renderer
      .create(<ProductCard product={productMock} />)
      .toJSON();

    expect(domTree).toMatchSnapshot();
  });

  it("match snapshot with 4+ stars", () => {
    const domTree = renderer
      .create(<ProductCard product={{ ...productMock, rating: 4.5 }} />)
      .toJSON();

    expect(domTree).toMatchSnapshot();
  });

  it("should be update wishlist", () => {
    const setWishlist = vi.fn();

    render(
      <ProductCard
        product={productMock}
        setWishlist={setWishlist}
        pathname="wishlist"
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(setWishlist).toBeCalled();

    fireEvent.click(screen.getByRole("button"));
    expect(setWishlist).toBeCalledWith([]);
  });
});
