import React from "react";

import RegistrationForm from "../RegistrationForm/RegistrationForm";

export default function Registration(props) {
  return (
    <section id="registration">
      <h2 className="registration__heading">Register to get a work</h2>
      <p className="registration__text">
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </p>
      <RegistrationForm className="registration__form-wrapper" />
    </section>
  );
}
