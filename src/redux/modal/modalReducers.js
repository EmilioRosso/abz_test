import { createReducer } from "@reduxjs/toolkit";

import modalActions from "./modalActions";
import { usersActions } from "../users";

const modalReducer = createReducer(false, {
  [usersActions.createUserSuccess]: (_, action) => true,
  [usersActions.createUserError]: (_, action) => true,
  [modalActions.openModal]: (_, action) => true,
  [modalActions.closeModal]: (_, action) => false,
});

export default modalReducer;
