import { IProduct } from "./interfaces/Product.interface";

export const getWishlist = (): IProduct[] => {
  const rawWishlist = localStorage.getItem("wishlist") || "[]";
  return JSON.parse(rawWishlist) as IProduct[];
};
