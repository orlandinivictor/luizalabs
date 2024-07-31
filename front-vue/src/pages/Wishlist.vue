<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
import ProductCard from "../components/ProductCard.vue";

import { getWishlist } from "../utils/customLocalStorage";

const products = ref([]);

const fetchWishlist = () => {
  const wishlist = getWishlist();
  products.value = wishlist;
};

fetchWishlist();
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
      @updateWishlist="fetchWishlist"
    />
  </div>
</template>
