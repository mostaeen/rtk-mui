import { configureStore, compose } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";

import initialState from "./initialState";
import appReducer from "./appReducer";
import calculatorReducer from "./calculatorSlice";

const devToolsExtension =
  process.env.NODE_ENV !== "production" && typeof window === "object"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const reducer = {
  app: appReducer,
  calculator: calculatorReducer,
  form: formReducer
};

const store = configureStore({
  reducer: reducer,
  devTools: devToolsExtension,
  initialState
});

export default store;
