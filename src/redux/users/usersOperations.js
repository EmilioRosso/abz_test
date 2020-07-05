import abzAPI from "../../api/abzAPI";

import usersActions from "./usersActions";

const getAllUsers = () => (dispatch) => {
  dispatch(usersActions.getAllUsersRequest());

  abzAPI
    .fetchAllUsers()
    .then((data) => {
      const users = data.data.users;
      users.sort((a, b) =>
        a.registration_timestamp < b.registration_timestamp ? 1 : -1
      );

      dispatch(usersActions.getAllUsersSuccess(users));
    })
    .catch((error) => dispatch(usersActions.getAllUsersError(error)));
};

const getUserById = (id) => (dispatch) => {
  dispatch(usersActions.getUserByIdRequest());

  abzAPI
    .fetchUserById(id)
    .then((data) => dispatch(usersActions.getUserByIdSuccess(data)))
    .catch((error) => dispatch(usersActions.getUserByIdError(error)));
};

const createUser = (user, token) => (dispatch) => {
  dispatch(usersActions.createUserRequest());

  abzAPI
    .fetchCreatedUser(user, token)
    .then((data) => dispatch(usersActions.createUserSuccess(data.data.user_id)))
    .catch((error) => dispatch(usersActions.createUserError(error)));
};

export default {
  getAllUsers,
  getUserById,
  createUser,
};
