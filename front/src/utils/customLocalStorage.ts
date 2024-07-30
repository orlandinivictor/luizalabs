import { IProduct } from "./interfaces/Product";

export const getWishlist = (): IProduct[] => {
  const rawWishlist = localStorage.getItem("wishlist") || "[]";
  return JSON.parse(rawWishlist) as IProduct[];
};
