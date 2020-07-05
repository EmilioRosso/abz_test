import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import positionsReducers from "./positions/positionsReducers";
import usersReducers from "./users/usersReducers";
import modalReducer from "./modal/modalReducers";

const store = configureStore({
  reducer: {
    users: usersReducers,
    positions: positionsReducers,
    modal: modalReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;
