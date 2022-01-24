let logged;

if (window.localStorage.getItem("token")) {
  logged = true;
} else {
  logged = false;
}

let initialState = {
  token: "",
  error: "",
  isLoggedIn: logged,
  user: {
    address: {
      geolocation: { lat: "", long: "" },
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    id: "",
    email: "",
    username: "",
    password: "",
    name: { firstname: "", lastname: "" },
    phone: "",
    __v: "",
  },
};

export function signInReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isLoggedIn: true, token: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "USER_FETCH":
      return { ...state, user: action.payload };
    case "SIGN_OUT":
      return { ...state, isLoggedIn: false, token: "" };

    default:
      return state;
  }
}
