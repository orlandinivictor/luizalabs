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
    style="height: 50vh"
    class="px-4 w-full flex flex-col items-center justify-center"
    v-bind:class="!products.length ? 'flex' : 'block'"
  >
    <v-icon name="fa-regular-heart" scale="3" class="fill-gray-600" />
    <h2 class="text-center mt-4 font-semibold text-2xl text-gray-600">
      Você ainda não possui itens salvos na sua Lista de Desejos.
    </h2>
  </div>

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
