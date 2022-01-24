import axios from "axios";

export const signIn = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://fakestoreapi.com/auth/login`,
      user
    );
    dispatch(setSignIn(response.data.token));
  } catch (error) {
    dispatch(setError(error.response.data.msg));
  }
};

function setSignIn(data) {
  return {
    type: "SIGN_IN",
    payload: data,
  };
}

function setError(data) {
  return {
    type: "ERROR",
    payload: data,
  };
}

export const userFetch = () => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/users/2`);
  dispatch(setUser(response.data));
};

function setUser(data) {
  return {
    type: "USER_FETCH",
    payload: data,
  };
}

export function signOut() {
  return {
    type: "SIGN_OUT",
  };
}
