let items = [];
let index;

if (window.localStorage.getItem("cartItems")) {
  items = JSON.parse(window.localStorage.getItem("cartItems"));
}

const initialState = {
  cartProducts: items,
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      index = state.cartProducts.findIndex(
        (item) => item.id === action.payload[0].id
      );

      if (index == -1) index = 0;

      const newCartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload[0].id
      );

      newCartProducts.splice(index, 0, action.payload[0]);

      return {
        ...state,
        cartProducts: [...newCartProducts],
      };

    case "REDUCE_FROM_CART":
      index = state.cartProducts.findIndex(
        (item) => item.id === action.payload[0].id
      );

      const revisedCartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload[0].id
      );

      revisedCartProducts.splice(index, 0, action.payload[0]);

      return {
        ...state,
        cartProducts: [...revisedCartProducts],
      };

    case "REMOVE_FROM_CART":
      const removedCartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload[0].id
      );

      return {
        ...state,
        cartProducts: [...removedCartProducts],
      };

    default:
      return state;
  }
}
