import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../reducers/productReducer";
import { categoryReducer } from "../reducers/categoryReducer";
import { signInReducer } from "../reducers/signInReducer";
import { cartReducer } from "../reducers/cartReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  signIn: signInReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
