import { createAction } from "@reduxjs/toolkit";

const getPositionsRequest = createAction("positions/getPosotionsRequest");
const getPositionsSuccess = createAction("positions/getPosotionsSuccess");
const getPositionsError = createAction("positions/getPosotionsError");

export default {
  getPositionsRequest,
  getPositionsSuccess,
  getPositionsError,
};
