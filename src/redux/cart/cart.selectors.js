import { createSelector } from "reselect";

// Input Selector
const selectCart = (state) => state.cart;

// Create Selector / Memoize selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumultedQuantity, cartItem) => accumultedQuantity + cartItem.quantity,
      0
    )
);
