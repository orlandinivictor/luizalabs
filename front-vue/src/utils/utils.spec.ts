import { expect, test } from "vitest";
import { formatCurrency } from "./formatCurrency";
import { getWishlist } from "./customLocalStorage";

test("formatCurrency", () => {
  expect(formatCurrency("39990")).toBe("R$ 399,90");
});

test("[customLocalStorage]getWishlist", () => {
  expect(getWishlist()).toStrictEqual([]);

  const arraySettedInLocalStorage = [{ code: "abc" }];
  localStorage.setItem("wishlist", JSON.stringify(arraySettedInLocalStorage));
  expect(getWishlist()).toStrictEqual(arraySettedInLocalStorage);
});
