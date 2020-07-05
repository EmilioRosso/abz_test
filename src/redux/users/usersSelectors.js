const getAllUsers = (state) => state.users.users;

const getFilteredUsers = (state, page) =>
  state.users.users.slice(0, page * 5 + page);

const getCurrentUser = (state) => state.users.user;

const getUsersError = (state) => state.users.error;

export default { getAllUsers, getFilteredUsers, getCurrentUser, getUsersError };
