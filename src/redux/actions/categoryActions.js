import axios from "axios";

export const allCategoriesFetch = () => async (dispatch) => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  dispatch(setAllCategory(response.data));
};

function setAllCategory(data) {
  return {
    type: "ALL_CATEGORIES",
    payload: data,
  };
}

export const singleCategoryFetch = (cat) => async (dispatch) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${cat}`
  );
  dispatch(setSingleCategory(response.data));
};

function setSingleCategory(data) {
  return {
    type: "SINGLE_CATEGORY",
    payload: data,
  };
}

export function removeCat() {
  return {
    type: "REMOVE_CATEGORY",
  };
}
