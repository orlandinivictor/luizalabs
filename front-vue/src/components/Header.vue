<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleWishlist = () => {
  router.push("/wishlist");
};
</script>

<template>
  <div class="h-24" />
  <header
    class="flex items-center justify-between fixed inset-x-0 top-0 z-50 bg-primary px-4 sm:px-20 py-4 sm:py-7"
  >
    <img src="/logo.svg" alt="Logo Netshoes" class="w-28 sm:w-56 h-full" />

    <div class="flex gap-2 sm:gap-20">
      <button class="flex items-center text-white" @click="handleWishlist">
        <v-icon name="bi-heart" scale="2" class="mr-0.5" />
        <span class="hidden sm:block text-xl font-semibold">Wishlist</span>
      </button>

      <button class="text-white">
        <v-icon name="fa-user-circle" scale="2" />
      </button>
    </div>
  </header>
</template>
