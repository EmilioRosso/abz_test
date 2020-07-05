import { createAction } from "@reduxjs/toolkit";

const getAllUsersRequest = createAction("users/getAllUsersRequest");
const getAllUsersSuccess = createAction("users/getAllUsersSuccess");
const getAllUsersError = createAction("users/getAllUsersError");

const getUserByIdRequest = createAction("users/getUserByIdRequest");
const getUserByIdSuccess = createAction("users/getUserByIdSuccess");
const getUserByIdError = createAction("users/getUserByIdError");

const createUserRequest = createAction("users/createUserRequest");
const createUserSuccess = createAction("users/createUserSuccess");
const createUserError = createAction("users/createUserError");

export default {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,

  getUserByIdRequest,
  getUserByIdSuccess,
  getUserByIdError,

  createUserRequest,
  createUserSuccess,
  createUserError,
};
