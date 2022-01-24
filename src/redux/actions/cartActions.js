export function addProductToCart(data) {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
}

export function reduceProductFromCart(data) {
  return {
    type: "REDUCE_FROM_CART",
    payload: data,
  };
}

export function removeProductFromCart(data) {
  return {
    type: "REMOVE_FROM_CART",
    payload: data,
  };
}
