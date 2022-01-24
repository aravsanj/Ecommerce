const initialState = {
  all: "",
  single: {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  },
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, all: action.payload };
    case "SINGLE_PRODUCT":
      return { ...state, single: action.payload };
    case "REMOVE_PRODUCT":
      return initialState;
    default:
      return state;
  }
}
