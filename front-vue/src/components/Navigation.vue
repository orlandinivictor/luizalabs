<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function handleNavigation(target) {
  router.push("/".concat(target));
}
</script>

<template>
  <nav class="py-8 border-b border-solid border-slate-500">
    <button
      class="text-lg text-violet-950"
      v-bind:style="
        $route.fullPath.includes('wishlist')
          ? 'font-weight: 500;'
          : 'font-weight:700;'
      "
      @click="handleNavigation('home')"
    >
      Home
    </button>

    <span v-if="$route.fullPath.includes('wishlist')" class="mx-1">/</span>
    <button
      v-if="$route.fullPath.includes('wishlist')"
      class="text-lg text-violet-950 font-bold"
      @click="handleNavigation('wishlist')"
    >
      Wishlist
    </button>
  </nav>
</template>
