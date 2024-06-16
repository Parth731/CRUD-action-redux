import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { CompanyReducer } from "./Reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootreducer = combineReducers({ company: CompanyReducer });

// Define the type for the store's middleware
// Configure middleware
const middlewares: Middleware[] = [thunk as any, logger];

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
