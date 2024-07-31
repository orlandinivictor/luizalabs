import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { ProductCard } from "../../components/ProductCard";

import type { IProduct } from "../../utils/interfaces/Product.interface";

import { PageDefault } from "../../styles";
import { Content } from "./styles";

export function Home() {
  const navigate = useNavigate();
  const router = useLocation();
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(
      "http://localhost:3333/product?pageSize=10&page=1"
    );

    setProducts(data.products);
  };

  useLayoutEffect(() => {
    fetchProducts();
  }, []);

  return (
    <PageDefault>
      <Header navigate={navigate} />
      <Navigation navigate={navigate} pathname={router.pathname} />

      <Content>
        {products.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            pathname={router.pathname}
          />
        ))}
      </Content>
    </PageDefault>
  );
}
