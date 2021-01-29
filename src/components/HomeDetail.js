import { Link } from "react-router-dom";

const HomeDetail = () => {
  return (
    <div class="detail">
      <div class="events">
        <div class="events__upcoming">
          <div class="events__upcoming__info">
            <h1>Upcoming Events</h1>
            <p>Alaska Cruise</p>
          </div>
          <div class="events__upcoming__date">
            <p>
              <h4>25</h4> <span>May</span>
            </p>
          </div>
        </div>
        <Link to="/home" class="btn btn--white events__upcoming__btn">
          View Event Details
        </Link>
      </div>
    </div>
  );
};
export default HomeDetail;
