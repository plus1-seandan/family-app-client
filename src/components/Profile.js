import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import me from "../img/seandan.jpg";
import { PROFILE } from "../queries";
import ProfileMain from "./ProfileMain";
import ProfileSide1 from "./ProfileSide1";

const Profile = () => {
  const { loading, error, data } = useQuery(PROFILE);
  console.log({ data });
  return (
    <div class="profile">
      <ProfileMain user={data?.getProfile.user} />
      {/* <ProfileSide1 group={data?.getProfile.group} /> */}

      {/* <div class="profile__side2">Side2</div> */}
    </div>
  );
};

export default Profile;
