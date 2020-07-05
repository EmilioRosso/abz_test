import { createReducer, combineReducers } from "@reduxjs/toolkit";

import usersActions from "./usersActions";

const users = createReducer([], {
  [usersActions.getAllUsersSuccess]: (_, { payload }) => payload,
});

const user = createReducer(null, {
  [usersActions.getUserByIdSuccess]: (_, { payload }) => payload,
  [usersActions.createUserSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [usersActions.getAllUsersError]: (_, { payload }) => payload,
  [usersActions.getUserByIdError]: (_, { payload }) => payload,
  [usersActions.createUserError]: (_, { payload }) => payload,
  [usersActions.getAllUsersSuccess]: (_, action) => null,
  [usersActions.getUserByIdSuccess]: (_, action) => null,
  [usersActions.createUserSuccess]: (_, action) => null,
});

export default combineReducers({ users, user, error });
