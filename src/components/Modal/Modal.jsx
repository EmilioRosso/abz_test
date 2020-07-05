import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "../utils/CloseIcon";
import modalActions from "../../redux/modal/modalActions";
import { usersSelectors } from "../../redux/users";

export default function Modal() {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(modalActions.closeModal());

  const error = useSelector((state) => usersSelectors.getUsersError(state));

  return (
    <div className="modal__backdrop">
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__heading">
            {error ? "Error" : "Congratulations"}
          </h2>
          <CloseIcon onClick={closeModal} />
        </div>
        <p className="modal__text">
          {error
            ? error.message
            : "You have successfully passed the registration"}
        </p>
        <div className="modal__footer">
          {error ? (
            <button
              className="modal__button"
              type="button"
              onClick={closeModal}
            >
              OK
            </button>
          ) : (
            <button
              className="modal__button"
              type="button"
              onClick={closeModal}
            >
              Great
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
