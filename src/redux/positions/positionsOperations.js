import abzAPI from "../../api/abzAPI";
import positionsActions from "./positionsActions";

const getPositions = () => (dispatch) => {
  dispatch(positionsActions.getPositionsRequest());

  abzAPI
    .fetchPositions()
    .then((data) =>
      dispatch(positionsActions.getPositionsSuccess(data.data.positions))
    )
    .catch((error) => dispatch(positionsActions.getPositionsError(error)));
};

export default getPositions;
