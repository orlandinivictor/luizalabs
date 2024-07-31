<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showOptions = ref(false);

const handleOptionsClick = () => {
  showOptions.value = !showOptions.value;
};

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

      <div class="relative">
        <button class="text-white" @click="handleOptionsClick">
          <v-icon name="fa-user-circle" scale="2" />
        </button>

        <div
          class="bg-white shadow-lg absolute mt-2 right-2 rounded p-3 w-36"
          v-bind:class="showOptions ? 'block' : 'hidden'"
        >
          <div
            class="w-0 h-0 border-x-8 border-b-8 border-x-transparent border-white absolute -top-2 right-0.5"
          />
          <ul>
            <li>
              <button @click="handleOptionsClick">Entrar</button>
            </li>
            <li>
              <button @click="handleOptionsClick">Minha Conta</button>
            </li>
            <li>
              <button @click="handleOptionsClick">Endereços</button>
            </li>
            <li>
              <button @click="handleOptionsClick">Minha Netshoes</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
