import me from "../img/seandan.jpg";

const Profile = () => {
  return (
    <div class="profile">
      <div class="profile__main">
        <img src={me} alt="portrait" class="profile__main__photo" />
        <div class="profile__main__info">
          <h1 class="profile__main__info__name">Sean Dan</h1>
          <ul class="profile__main__info__list">
            <li class="profile__main__info__item">
              Address | <span>1 River Ct, Jersey City, New Jersey 07310</span>
            </li>
            <li class="profile__main__info__item">
              Email | <span>seanysdan@gmail.com</span>
            </li>
            <li class="profile__main__info__item">
              Phone | <span>424-242-4242</span>
            </li>
            <li class="profile__main__info__item">
              Date of Birth | <span>05/21/1996</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="profile__side1">
        <h2 class="profile__side1__header">My Family</h2>
        <ul class="profile__side1__list">
          <li class="profile__side1__list__item">
            <img
              src={me}
              alt="portrait"
              class="profile__side1__list__item__photo"
            />
            <p>Person 1</p>
          </li>
          <li class="profile__side1__list__item">
            <img
              src={me}
              alt="portrait"
              class="profile__side1__list__item__photo"
            />
            <p>Person 2</p>
          </li>
          <li class="profile__side1__list__item">
            <img
              src={me}
              alt="portrait"
              class="profile__side1__list__item__photo"
            />
            <p>Person 3</p>
          </li>
          <li class="profile__side1__list__item">
            <img
              src={me}
              alt="portrait"
              class="profile__side1__list__item__photo"
            />
            <p>Person 4</p>
          </li>
        </ul>
      </div>
      {/* <div class="profile__side2">Side2</div> */}

      {/* <aside class="sidebar-left">Left Sidebar</aside>

      <article>Article</article>

      <aside class="sidebar-right">Right Sidebar</aside>

      <footer>Footer</footer> */}
    </div>
  );
};

export default Profile;
