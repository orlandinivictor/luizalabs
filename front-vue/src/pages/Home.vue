<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);

const fetchProducts = async () => {
  const { data } = await axios.get(
    "http://localhost:3333/product?pageSize=10&page=1"
  );

  products.value = data.products;
};

fetchProducts();
</script>

<template>
  <Header />
  <Navigation />

  <div
    class="w-full px-4 sm:px-20 mt-8 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <ProductCard
      v-for="product of products"
      :key="product.code"
      :product="product"
    />
  </div>
</template>
