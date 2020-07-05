import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import abzAPI from "../../api/abzAPI";
import { usersOperations } from "../../redux/users";

export default function RegistrationForm(props) {
  const dispatch = useDispatch();

  const sendUser = (user, token) =>
    dispatch(usersOperations.createUser(user, token));

  const positions = useSelector((state) => state.positions.items);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: "",
      photo: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be 2 characters or more")
        .max(60, "Must be 60 characters or less")
        .required("Required")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .max(13, "Must be 13 characters or less")
        .matches(/^\+380/, "Phone number should start with +380")
        .required("Required"),
      position_id: Yup.number().required("Required"),
      photo: Yup.mixed()
        .test(
          "fileSize",
          "File Size is too large",
          (value) => value.size < 5242880
        )
        .test(
          "fileType",
          "Unsupported File Format",
          (value) => value.type === "image/jpg" || "image/jpeg"
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      abzAPI.fetchToken().then((data) => {
        sendUser(formData, data.data.token);
      });
      resetForm();
    },
  });

  return (
    <div className={props.className}>
      <form className="registration__form" onSubmit={formik.handleSubmit}>
        <label className="registration__label" htmlFor="name">
          <p className="registration__name">Name</p>

          <input
            className="registration__input"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="registration__error">{formik.errors.name}</p>
          ) : null}
        </label>
        <label className="registration__label" htmlFor="email">
          <p className="registration__name">Email</p>
          <input
            className="registration__input"
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="registration__error">{formik.errors.email}</p>
          ) : null}
        </label>
        <label className="registration__label" htmlFor="phone">
          <p className="registration__name">Phone number</p>
          <input
            className="registration__input"
            id="phone"
            name="phone"
            type="text"
            placeholder="+380 XX XXX XX XX"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="registration__error">{formik.errors.phone}</p>
          ) : null}
          <p className="registration__sign">
            Enter phone number in open format
          </p>
        </label>
        <div className="registration__radio-wrapper">
          <p className="registration__subheader">Select your position</p>
          {positions.map((position) => (
            <label key={position.id} className="registration__profession">
              <input
                className="registration__radio"
                type="radio"
                id={position.id}
                name="position_id"
                value={position.id}
                checked={formik.values.position_id === position.id}
                onChange={() =>
                  formik.setFieldValue("position_id", position.id)
                }
              />
              {position.name}
            </label>
          ))}
        </div>
        <div>
          <p className="registration__subheader--photo">Photo</p>
          <div className="registration__photo-container">
            <p className="registration__photo-name">
              {formik.values.photo
                ? formik.values.photo.name
                : "Upload your photo"}
            </p>
            <input
              className="registration__file-upload"
              type="file"
              id="photo"
              name="photo"
              onChange={(event) => {
                formik.setFieldValue("photo", event.currentTarget.files[0]);
              }}
            />
            <label className="registration__photo-button" htmlFor="photo">
              Browse
            </label>
          </div>
          {formik.errors.photo ? (
            <p className="registration__error">{formik.errors.photo}</p>
          ) : null}
        </div>
        <button
          className="registration__button"
          type="submit"
          onClick={formik.handleSubmit}
        >
          Sign up now
        </button>
      </form>
    </div>
  );
}
