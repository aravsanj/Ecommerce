import axios from "axios";

export const allProductsFetch = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch(setAllProducts(response.data));
};

function setAllProducts(data) {
  return {
    type: "ALL_PRODUCTS",
    payload: data,
  };
}

export const singleProductFetch = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  dispatch(setSingleProduct(response.data));
};

function setSingleProduct(data) {
  return {
    type: "SINGLE_PRODUCT",
    payload: data,
  };
}

export function removeProduct() {
  return {
    type: "REMOVE_PRODUCT",
  };
}
