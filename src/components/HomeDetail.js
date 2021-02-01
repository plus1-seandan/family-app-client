import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { PROFILE, UPCOMING_EVENTS } from "../queries";
import EventCard from "./EventCard";
import ProfileSide1 from "./ProfileSide1";
import ProfileMain from "./ProfileMain";

const HomeDetail = () => {
  const { loading, error, data } = useQuery(PROFILE);

  const renderMemberComponent = (member) => {
    return (
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img class="img-fluid" src={member.photo} />
          </div>
          <div class="team-content">
            <h3 class="name">
              {member.firstName} {member.lastName}
            </h3>
            <h4 class="title">{member.email}</h4>
          </div>
          <ul class="social">
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                class="fa fa-facebook"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                class="fa fa-twitter"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                class="fa fa-google-plus"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                class="fa fa-linkedin"
                aria-hidden="true"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div class="home__container">
      <div class="home__row">
        {data?.getProfile?.group.members.map((member) =>
          renderMemberComponent(member)
        )}
      </div>
    </div>
  );
};
export default HomeDetail;
