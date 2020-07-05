import React from "react";

export default function UserCard({ user }) {
  const { name, email, phone, position, photo } = user;
  return (
    <li className="user-card">
      <img
        src={photo || "../../assets/images/photo-cover.png"}
        alt={name}
        className="user-card__image"
      />
      <h4 className="user-card__name">{name}</h4>
      <div className="user-card__info">
        <p className="user-card__text">{position}</p>
        <p className="user-card__text">{email}</p>
        <p className="user-card__email">{email}</p>
        <p className="user-card__text">{phone}</p>
      </div>
    </li>
  );
}
