import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const fetchAllUsers = () => axios.get("/users?count=100");

const fetchUserById = (id) => axios.get(`/users/${id}`);

const fetchCreatedUser = (user, token) =>
  axios.post("/users", user, { headers: { Token: token } });

const fetchToken = () => axios.get("/token");

const fetchPositions = () => axios.get("/positions");

export default {
  fetchAllUsers,
  fetchUserById,
  fetchCreatedUser,
  fetchToken,
  fetchPositions,
};
