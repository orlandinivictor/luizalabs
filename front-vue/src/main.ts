import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiHeart,
  FaUserCircle,
  FaRegularHeart,
  LaStarSolid,
  LaStarHalfSolid,
  IoCloseOutline,
} from "oh-vue-icons/icons";

import Home from "./pages/Home.vue";
import Wishlist from "./pages/Wishlist.vue";
import App from "./App.vue";

import "./style.css";

const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  { path: "/wishlist", name: "wishlist", component: Wishlist },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

addIcons(
  BiHeart,
  FaUserCircle,
  FaRegularHeart,
  LaStarSolid,
  LaStarHalfSolid,
  IoCloseOutline
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
