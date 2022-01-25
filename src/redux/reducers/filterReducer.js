const initialState = {
  low: 0,
  high: Infinity,
};

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "UP_TO_25":
      return { ...state, low: 0, high: 25 };
    case "25_TO_50":
      return { ...state, low: 25, high: 50 };
    case "50_TO_100":
      return { ...state, low: 50, high: 100 };
    case "100_TO_200":
      return { ...state, low: 100, high: 200 };
    case "ABOVE_200":
      return { ...state, low: 200, high: Infinity };
    case "ALL":
      return { ...state, low: 0, high: Infinity };

    default:
      return state;
  }
}
