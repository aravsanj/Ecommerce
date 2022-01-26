let initialState = {
  all: [],
  single: [],
};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_CATEGORIES":
      return { ...state, all: action.payload };
    case "SINGLE_CATEGORY":
      return { ...state, single: action.payload };
    case "REMOVE_CATEGORY":
      return { ...state, single: [] };
    default:
      return state;
  }
}
