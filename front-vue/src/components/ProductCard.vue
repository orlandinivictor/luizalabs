<script setup lang="ts">
import { ref } from "vue";

import { IProduct } from "../utils/interfaces/Product.interface";
import { formatCurrency } from "../utils/formatCurrency";
import { getWishlist } from "../utils/customLocalStorage";

import "./ProductCard.css";

const { product } = defineProps<{
  product: IProduct;
}>();
const emit = defineEmits(["updateWishlist"]);

const alreadyWishlisted = (code: string): boolean => {
  const wishlist = getWishlist();
  const alreadyWishlisted = wishlist.find((item) => item.code === code);

  return Boolean(alreadyWishlisted);
};

const isWishlisted = ref(alreadyWishlisted(product.code));

const handleWishlist = () => {
  const wishlist = getWishlist();

  let updatedWishlist: IProduct[];
  if (alreadyWishlisted(product.code)) {
    updatedWishlist = wishlist.filter((item) => item.code !== product.code);
  } else {
    updatedWishlist = [...wishlist, product];
  }

  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  emit("updateWishlist");
  isWishlisted.value = !isWishlisted.value;
};
</script>

<template>
  <div class="relative w-full h-80 p-2 rounded flex flex-col shadow-lg">
    <button
      class="flex items-center justify-center p-1.5 rounded-full absolute top-2 right-2"
      v-bind:class="
        $route.fullPath.includes('wishlist')
          ? 'bg-transparent text-gray-600'
          : isWishlisted
          ? 'bg-red-600 text-white'
          : 'bg-gray-600 text-white'
      "
      @click="handleWishlist"
    >
      <v-icon
        v-bind:name="
          $route.fullPath.includes('wishlist')
            ? 'io-close-outline'
            : 'fa-regular-heart'
        "
        scale="1.25"
      />
    </button>

    <img
      :src="product.image"
      :alt="product.name"
      class="object-contain h-3/5"
    />

    <h2 class="mt-3 font-semibold text-base text-gray-800 leading-5">
      {{ product.name }}
    </h2>

    <div class="flex flex-col absolute left-3 bottom-3">
      <div class="flex gap-1 items-center">
        <div class="-mt-0.5">
          <v-icon
            name="la-star-solid"
            scale="0.875"
            v-bind:class="
              product.rating >= 1 ? 'fill-yellow-500' : 'fill-gray-600'
            "
          />
          <v-icon
            name="la-star-half-solid"
            scale="0.875"
            style="margin-left: -1.1rem"
            v-bind:class="
              product.rating > 0 && product.rating < 1
                ? 'fill-yellow-500'
                : 'fill-transparent'
            "
          />
        </div>
        <div class="-mt-0.5">
          <v-icon
            name="la-star-solid"
            scale="0.875"
            v-bind:class="
              product.rating >= 2 ? 'fill-yellow-500' : 'fill-gray-600'
            "
          />
          <v-icon
            name="la-star-half-solid"
            scale="0.875"
            style="margin-left: -1.1rem"
            v-bind:class="
              product.rating > 1 && product.rating < 2
                ? 'fill-yellow-500'
                : 'fill-transparent'
            "
          />
        </div>
        <div class="-mt-0.5">
          <v-icon
            name="la-star-solid"
            scale="0.875"
            v-bind:class="
              product.rating >= 3 ? 'fill-yellow-500' : 'fill-gray-600'
            "
          />
          <v-icon
            name="la-star-half-solid"
            scale="0.875"
            style="margin-left: -1.1rem"
            v-bind:class="
              product.rating > 2 && product.rating < 3
                ? 'fill-yellow-500'
                : 'fill-transparent'
            "
          />
        </div>
        <div class="-mt-0.5">
          <v-icon
            name="la-star-solid"
            scale="0.875"
            v-bind:class="
              product.rating >= 4 ? 'fill-yellow-500' : 'fill-gray-600'
            "
          />
          <v-icon
            name="la-star-half-solid"
            scale="0.875"
            style="margin-left: -1.1rem"
            v-bind:class="
              product.rating > 3 && product.rating < 4
                ? 'fill-yellow-500'
                : 'fill-transparent'
            "
          />
        </div>
        <div class="-mt-0.5">
          <v-icon
            name="la-star-solid"
            scale="0.875"
            v-bind:class="
              product.rating >= 5 ? 'fill-yellow-500' : 'fill-gray-600'
            "
          />
          <v-icon
            name="la-star-half-solid"
            scale="0.875"
            style="margin-left: -1.1rem"
            v-bind:class="
              product.rating > 4 && product.rating < 5
                ? 'fill-yellow-500'
                : 'fill-transparent'
            "
          />
        </div>

        <span class="text-sm font-bold ml-1 text-gray-800">{{
          product.rating.toFixed(1)
        }}</span>
      </div>

      <span class="line-through text-sm text-gray-300">
        {{ formatCurrency(product.priceInCents) }}
      </span>
      <span class="text-lg font-bold text-violet-950 -mt-1">
        {{ formatCurrency(product.salePriceInCents) }}
      </span>
    </div>
  </div>
</template>
