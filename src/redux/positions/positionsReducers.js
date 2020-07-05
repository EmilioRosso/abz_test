import { createReducer, combineReducers } from "@reduxjs/toolkit";

import positionsActions from "./positionsActions";

const items = createReducer([], {
  [positionsActions.getPositionsSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [positionsActions.getPositionsError]: (_, { payload }) => payload,
  [positionsActions.getPositionsSuccess]: (_, action) => null,
});

export default combineReducers({ items, error });
