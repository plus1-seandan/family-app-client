import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { PROFILE } from "../queries";

function Member({ user }) {
  return (
    <li class="profile__side1__list__item">
      <img
        src={user.photo}
        alt="portrait"
        class="profile__side1__list__item__photo"
      />
      <p>
        {user.firstName} {user.lastName}
      </p>
    </li>
  );
}

function ProfileSide1({ group }) {
  const { loading, error, data } = useQuery(PROFILE);
  console.log({ data });
  return (
    <div class="profile__side1">
      <h2 class="profile__side1__header">My Family</h2>
      <ul class="profile__side1__list">
        {data?.getProfile?.group.members?.map((member) => (
          <Member user={member} />
        ))}
      </ul>
      <Link href="/home" class="btn btn--white events__upcoming__btn">
        Edit Family
      </Link>
    </div>
  );
}

export default ProfileSide1;
