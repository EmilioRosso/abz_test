import React, { useState } from "react";
import { useSelector } from "react-redux";

import UserCard from "../UserCard/UserCard";
import { usersSelectors } from "../../redux/users";

export default function Users() {
  let [page, setPage] = useState(1);

  const allUsers = useSelector((state) => usersSelectors.getAllUsers(state));

  const users = useSelector((state) =>
    usersSelectors.getFilteredUsers(state, page)
  );

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <section id="users">
      <div className="users">
        <h2 className="users__heading">Our cheerful users</h2>
        <p className="users__text">
          Attention! Sorting users by registration date
        </p>
        <ul className="users__list">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
        {page * 5 + page <= allUsers.length && (
          <button className="users__button" type="button" onClick={handleClick}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}
